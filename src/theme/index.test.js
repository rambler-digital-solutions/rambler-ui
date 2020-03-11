import React, {createContext} from 'react'
import classnames from 'classnames'
import originalWithStyles, {createTheming} from 'react-jss'
import {
  ThemeProvider,
  withStyles,
  withTheme,
  createJss,
  createSheetsRegistry
} from './'
import {mount, getNodeStyles} from '../../test/utils'
import {normalize as nc} from '../utils/colors'

const getTheme = color => ({button: {color}})
const ThemeContext = createContext({})
const theming = createTheming(ThemeContext)
const {ThemeProvider: ExternalThemeProvider} = theming

const Button = withStyles(({button}) => ({button}), {name: 'Button'})(
  function Button({classes, className}) {
    return <button className={classnames(classes.button, className)} />
  }
)

const External = originalWithStyles(({button}) => ({button}), {theming})(
  function External({classes, className}) {
    return <button className={classnames(classes.button, className)} />
  }
)

describe('<ThemeProvider />', () => {
  it('should pass theme', () => {
    mount(
      <ThemeProvider theme={getTheme('#ffffff')}>
        <Button className="apply-theme" />
      </ThemeProvider>
    )

    const button = document.querySelector('.apply-theme')
    expect(getNodeStyles(button).color).toBe(nc('#ffffff'))
  })

  it('should merge nested theme', () => {
    mount(
      <ThemeProvider theme={getTheme('#ffffff')}>
        <div>
          <Button className="apply-nested" />
          <ThemeProvider theme={getTheme('#000000')}>
            <Button className="apply-nested" />
          </ThemeProvider>
        </div>
      </ThemeProvider>
    )

    const buttons = document.querySelectorAll('.apply-nested')
    expect(getNodeStyles(buttons[0]).color).toBe(nc('#ffffff'))
    expect(getNodeStyles(buttons[1]).color).toBe(nc('#000000'))
    expect(buttons[0].className).not.toBe(buttons[1].className)
  })

  it('should apply default className for external components', () => {
    mount(
      <ThemeProvider theme={getTheme('#ffffff')}>
        <ExternalThemeProvider theme={getTheme('#ffffff')}>
          <div>
            <Button className="class-names" />
            <External className="class-names" />
          </div>
        </ExternalThemeProvider>
      </ThemeProvider>
    )

    const buttons = document.querySelectorAll('.class-names')
    expect(buttons[0].className.indexOf('rui-')).toBe(0)
    expect(buttons[1].className.indexOf('rui-')).toBe(-1)
  })

  it('should isolate multiple providers', () => {
    mount(
      <div>
        <ThemeProvider theme={getTheme('#ffffff')}>
          <Button className="apply-isolate" />
        </ThemeProvider>
        <ThemeProvider theme={getTheme('#000000')}>
          <Button className="apply-isolate" />
        </ThemeProvider>
      </div>
    )

    const buttons = document.querySelectorAll('.apply-isolate')
    expect(getNodeStyles(buttons[0]).color).toBe(nc('#ffffff'))
    expect(getNodeStyles(buttons[1]).color).toBe(nc('#000000'))
    expect(buttons[0].className).not.toBe(buttons[1].className)
  })

  it('should use custom jss, sheets registry', () => {
    const jss = createJss()
    const sheetsRegistry = createSheetsRegistry()

    mount(
      <ThemeProvider
        theme={getTheme('#ffffff')}
        jss={jss}
        sheetsRegistry={sheetsRegistry}>
        <div>
          <Button />
          <ThemeProvider theme={getTheme('#000000')}>
            <Button />
          </ThemeProvider>
        </div>
      </ThemeProvider>
    )

    const classPrefix = sheetsRegistry.registry[0].classes.button

    expect(sheetsRegistry.toString()).toBe(
      `.${classPrefix} {\n` +
        '  color: #ffffff;\n' +
        '}\n' +
        `.${classPrefix}-1 {\n` +
        '  color: #000000;\n' +
        '}'
    )
  })

  it('should use multiple custom jss, sheets registry', () => {
    const jss = createJss()
    const sheetsRegistry = createSheetsRegistry()
    const nestedJss = createJss()
    const nestedSheetsRegistry = createSheetsRegistry()
    const separateJss = createJss()
    const separateSheetsRegistry = createSheetsRegistry()

    mount(
      <div>
        <ThemeProvider
          theme={getTheme('#ffffff')}
          jss={jss}
          sheetsRegistry={sheetsRegistry}>
          <div>
            <Button />
            <ThemeProvider
              theme={getTheme('#000000')}
              jss={nestedJss}
              sheetsRegistry={nestedSheetsRegistry}>
              <Button />
            </ThemeProvider>
          </div>
        </ThemeProvider>
        <ThemeProvider
          theme={getTheme('#777777')}
          jss={separateJss}
          sheetsRegistry={separateSheetsRegistry}>
          <Button />
        </ThemeProvider>
      </div>
    )

    const classPrefix = sheetsRegistry.registry[0].classes.button.slice(0, -2)

    expect(sheetsRegistry.toString()).toBe(
      `.${classPrefix}-${jss.id} {\n` + '  color: #ffffff;\n' + '}'
    )

    expect(nestedSheetsRegistry.toString()).toBe(
      `.${classPrefix}-${nestedJss.id} {\n` + '  color: #000000;\n' + '}'
    )

    expect(separateSheetsRegistry.toString()).toBe(
      `.${classPrefix}-${separateJss.id} {\n` + '  color: #777777;\n' + '}'
    )
  })

  it('should render separate stylesheets with ssr', () => {
    const sheetsRegistry = createSheetsRegistry()
    const separateSheetsRegistry = createSheetsRegistry()

    mount(
      <div>
        <ThemeProvider
          theme={getTheme('#ffffff')}
          sheetsRegistry={sheetsRegistry}>
          <div>
            <Button />
          </div>
        </ThemeProvider>
        <ThemeProvider
          theme={getTheme('#777777')}
          sheetsRegistry={separateSheetsRegistry}>
          <Button />
        </ThemeProvider>
      </div>
    )

    const classPrefix = sheetsRegistry.registry[0].classes.button

    expect(sheetsRegistry.toString()).toBe(
      `.${classPrefix} {\n` + '  color: #ffffff;\n' + '}'
    )

    expect(separateSheetsRegistry.toString()).toBe(
      `.${classPrefix} {\n` + '  color: #777777;\n' + '}'
    )
  })

  it('should pass theme to props', () => {
    const Button = withTheme(function Button({theme, className}) {
      return (
        <button className={className} style={{color: theme.button.color}} />
      )
    })

    mount(
      <ThemeProvider theme={getTheme('#ffffff')}>
        <Button className="with-theme" />
      </ThemeProvider>
    )

    const button = document.querySelector('.with-theme')
    expect(getNodeStyles(button).color).toBe(nc('#ffffff'))
  })
})
