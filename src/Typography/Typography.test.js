import React from 'react'
import {ThemeProvider} from '../theme'
import {mount, getStyles, getWrapperNode} from '../utils/test-utils'
import theme from '../theme/base'
import {normalize as nc} from '../utils/colors'

import Typography, {
  H1,
  H2,
  H3,
  Text,
  Quote,
  Epigraph,
  Description,
  GalleryDescription,
  Source,
  Timestamp,
  PhotoSource,
  List
} from './'

const applyTheme = children => <ThemeProvider>{children}</ThemeProvider>

describe('Typography', () => {
  it('default props', () => {
    const wrapper = mount(applyTheme(<Typography />))
    const element = getWrapperNode(wrapper)

    expect(element.tagName.toLowerCase()).toEqual('div')
    expect(element.textContent).toEqual('')
    expect(element.classList.length).toEqual(1)
    expect(element.className.includes('reset')).toEqual(true)
  })

  it('custom props', () => {
    const props = {
      tagName: 'ul',
      children: 'children',
      className: 'className',
      type: 'h1',
      uppercase: true,
      style: {
        display: 'inline'
      },
      'data-test': 'test'
    }

    const wrapper = mount(applyTheme(<Typography {...props} />))
    const element = getWrapperNode(wrapper)

    expect(element.className.includes('h1')).toEqual(true)
    expect(element.className.includes('uppercase')).toEqual(true)

    expect(element.tagName.toLowerCase()).toEqual(props.tagName.toLowerCase())
    expect(element.textContent).toEqual(props.children)
    expect(element.classList.contains(props.className)).toEqual(true)
    expect(element.style.display).toEqual(props.style.display)
    expect(element.getAttribute('data-test')).toEqual(props['data-test'])
  })
})

const isFontStyleEqual = (
  elementComputedStyle,
  {fontSize, fontWeight = '400', lineHeight, fontFamily}
) => {
  if (fontSize + 'px' !== elementComputedStyle['font-size']) return false
  if (fontWeight + '' !== elementComputedStyle['font-weight']) return false
  if (lineHeight && lineHeight + 'px' !== elementComputedStyle['line-height'])
    return false
  if (fontFamily !== elementComputedStyle['font-family']) return false
  return true
}

const isVerticalMarginsEqual = (elementComputedStyle, top, bottom) => {
  if (top + 'px' !== elementComputedStyle['margin-top']) return false
  const bottomMargin = bottom || bottom === 0 ? bottom : top
  if (bottomMargin + 'px' !== elementComputedStyle['margin-bottom'])
    return false
  return true
}

const isPropsApplied = (element, props) => {
  if (!element.classList.contains(props.className)) return false
  if (element.getAttribute('data-test') !== props['data-test']) return false
  if (element.textContent !== props.children) return false
  return true
}

const customProps = {
  children: 'children',
  className: 'className',
  tagName: 'section',
  'data-test': 'test'
}

describe('H1', () => {
  it('default props', () => {
    const wrapper = mount(applyTheme(<H1 />))
    const element = getWrapperNode(wrapper)
    expect(element.tagName.toLowerCase()).toEqual('h1')
    expect(element.textContent).toEqual('')
  })

  it('custom props', () => {
    const wrapper = mount(applyTheme(<H1 {...customProps} />))
    const element = getWrapperNode(wrapper)
    expect(element.tagName.toLowerCase()).toEqual(customProps.tagName)
    expect(isPropsApplied(element, customProps)).toEqual(true)
  })

  it('styles', () => {
    const wrapper = mount(applyTheme(<H1 />))
    const styles = getStyles(wrapper)
    expect(isFontStyleEqual(styles, theme.typography.h1)).toEqual(true)
    expect(isVerticalMarginsEqual(styles, 15)).toEqual(true)
  })
})

describe('H2', () => {
  it('default props', () => {
    const wrapper = mount(applyTheme(<H2 />))
    const element = getWrapperNode(wrapper)
    expect(element.tagName.toLowerCase()).toEqual('h2')
    expect(element.textContent).toEqual('')
  })

  it('custom props', () => {
    const wrapper = mount(applyTheme(<H2 {...customProps} />))
    const element = getWrapperNode(wrapper)
    expect(element.tagName.toLowerCase()).toEqual(customProps.tagName)
    expect(isPropsApplied(element, customProps)).toEqual(true)
  })

  it('styles', () => {
    const wrapper = mount(applyTheme(<H2 />))
    const styles = getStyles(wrapper)
    expect(isFontStyleEqual(styles, theme.typography.h2)).toEqual(true)
    expect(isVerticalMarginsEqual(styles, 20)).toEqual(true)
  })
})

describe('H3', () => {
  it('default props', () => {
    const wrapper = mount(applyTheme(<H3 />))
    const element = getWrapperNode(wrapper)
    expect(element.tagName.toLowerCase()).toEqual('h3')
    expect(element.textContent).toEqual('')
  })

  it('custom props', () => {
    const wrapper = mount(applyTheme(<H3 {...customProps} />))
    const element = getWrapperNode(wrapper)
    expect(element.tagName.toLowerCase()).toEqual(customProps.tagName)
    expect(isPropsApplied(element, customProps)).toEqual(true)
  })

  it('styles', () => {
    const wrapper = mount(applyTheme(<H3 />))
    const styles = getStyles(wrapper)
    expect(isFontStyleEqual(styles, theme.typography.h3)).toEqual(true)
    expect(isVerticalMarginsEqual(styles, 20)).toEqual(true)
  })
})

describe('Text', () => {
  it('default props', () => {
    const wrapper = mount(applyTheme(<Text />))
    const element = getWrapperNode(wrapper)
    expect(element.tagName.toLowerCase()).toEqual('p')
    expect(element.textContent).toEqual('')
  })

  it('custom props', () => {
    const wrapper = mount(applyTheme(<Text {...customProps} />))
    const element = getWrapperNode(wrapper)
    expect(element.tagName.toLowerCase()).toEqual(customProps.tagName)
    expect(isPropsApplied(element, customProps)).toEqual(true)
  })

  it('styles', () => {
    const wrapper = mount(applyTheme(<Text />))
    const styles = getStyles(wrapper)
    expect(isFontStyleEqual(styles, theme.typography.text)).toEqual(true)
    expect(isVerticalMarginsEqual(styles, 20)).toEqual(true)
  })
})

describe('Quote', () => {
  it('default props', () => {
    const wrapper = mount(applyTheme(<Quote />))
    const element = getWrapperNode(wrapper)
    expect(element.tagName.toLowerCase()).toEqual('blockquote')
    expect(element.textContent).toEqual('')
  })

  it('custom props', () => {
    const wrapper = mount(applyTheme(<Quote {...customProps} />))
    const element = getWrapperNode(wrapper)
    expect(element.tagName.toLowerCase()).toEqual(customProps.tagName)
    expect(isPropsApplied(element, customProps)).toEqual(true)
  })

  it('styles', () => {
    const wrapper = mount(
      applyTheme(
        <Quote>
          <p id="first" />
          <p id="second" />
        </Quote>
      )
    )
    const styles = getStyles(wrapper)
    expect(isFontStyleEqual(styles, theme.typography.quote)).toEqual(true)
    expect(isVerticalMarginsEqual(styles, 30)).toEqual(true)
    expect(styles['padding-left']).toEqual('37px')
    expect(styles['border-left-width']).toEqual('3px')
    expect(styles['border-left-style']).toEqual('solid')
    expect(styles['border-left-color']).toEqual(
      nc(theme.typography.quote.borderColor)
    )
    expect(styles['font-style']).toEqual('italic')

    const firstChildStyles = getStyles(wrapper.find('#first'))
    expect(isVerticalMarginsEqual(firstChildStyles, 0)).toEqual(true)

    const secondChildStyles = getStyles(wrapper.find('#second'))
    expect(isVerticalMarginsEqual(secondChildStyles, 20, 0)).toEqual(true)
  })
})

describe('Epigraph', () => {
  it('default props', () => {
    const wrapper = mount(applyTheme(<Epigraph />))
    const element = getWrapperNode(wrapper)
    expect(element.tagName.toLowerCase()).toEqual('div')
    expect(element.textContent).toEqual('')
  })

  it('custom props', () => {
    const wrapper = mount(applyTheme(<Epigraph {...customProps} />))
    const element = getWrapperNode(wrapper)
    expect(element.tagName.toLowerCase()).toEqual(customProps.tagName)
    expect(isPropsApplied(element, customProps)).toEqual(true)
  })

  it('styles', () => {
    const wrapper = mount(applyTheme(<Epigraph />))
    const styles = getStyles(wrapper)
    expect(isFontStyleEqual(styles, theme.typography.epigraph)).toEqual(true)
    expect(isVerticalMarginsEqual(styles, 20)).toEqual(true)
    expect(styles['font-style']).toEqual('italic')
  })
})

describe('Description', () => {
  it('default props', () => {
    const wrapper = mount(applyTheme(<Description />))
    const element = getWrapperNode(wrapper)
    expect(element.tagName.toLowerCase()).toEqual('div')
    expect(element.textContent).toEqual('')
  })

  it('custom props', () => {
    const wrapper = mount(applyTheme(<Description {...customProps} />))
    const element = getWrapperNode(wrapper)
    expect(element.tagName.toLowerCase()).toEqual(customProps.tagName)
    expect(isPropsApplied(element, customProps)).toEqual(true)
  })

  it('styles', () => {
    const wrapper = mount(applyTheme(<Description />))
    const styles = getStyles(wrapper)
    expect(isFontStyleEqual(styles, theme.typography.description)).toEqual(true)
    expect(isVerticalMarginsEqual(styles, 20, 25)).toEqual(true)
  })
})

describe('GalleryDescription', () => {
  it('default props', () => {
    const wrapper = mount(applyTheme(<GalleryDescription />))
    const element = getWrapperNode(wrapper)
    expect(element.tagName.toLowerCase()).toEqual('div')
    expect(element.textContent).toEqual('')
  })

  it('custom props', () => {
    const wrapper = mount(applyTheme(<GalleryDescription {...customProps} />))
    const element = getWrapperNode(wrapper)
    expect(element.tagName.toLowerCase()).toEqual(customProps.tagName)
    expect(isPropsApplied(element, customProps)).toEqual(true)
  })

  it('styles', () => {
    const wrapper = mount(applyTheme(<GalleryDescription />))
    const styles = getStyles(wrapper)
    expect(
      isFontStyleEqual(styles, theme.typography.galleryDescription)
    ).toEqual(true)
    expect(isVerticalMarginsEqual(styles, 0)).toEqual(true)
  })
})

describe('Source', () => {
  it('default props', () => {
    const wrapper = mount(applyTheme(<Source />))
    const element = getWrapperNode(wrapper)
    expect(element.tagName.toLowerCase()).toEqual('span')
    expect(element.textContent).toEqual('')
  })

  it('custom props', () => {
    const wrapper = mount(applyTheme(<Source {...customProps} />))
    const element = getWrapperNode(wrapper)
    expect(element.tagName.toLowerCase()).toEqual(customProps.tagName)
    expect(isPropsApplied(element, customProps)).toEqual(true)
  })

  it('styles', () => {
    const wrapper = mount(applyTheme(<Source />))
    const styles = getStyles(wrapper)
    expect(isFontStyleEqual(styles, theme.typography.source)).toEqual(true)
    expect(isVerticalMarginsEqual(styles, 0)).toEqual(true)
    expect(styles['text-transform']).toEqual('uppercase')
  })
})

describe('Timestamp', () => {
  it('default props', () => {
    const wrapper = mount(applyTheme(<Timestamp />))
    const element = getWrapperNode(wrapper)
    expect(element.tagName.toLowerCase()).toEqual('time')
    expect(element.textContent).toEqual('')
  })

  it('custom props', () => {
    const wrapper = mount(applyTheme(<Timestamp {...customProps} />))
    const element = getWrapperNode(wrapper)
    expect(element.tagName.toLowerCase()).toEqual(customProps.tagName)
    expect(isPropsApplied(element, customProps)).toEqual(true)
  })

  it('styles', () => {
    const wrapper = mount(applyTheme(<Timestamp />))
    const styles = getStyles(wrapper)
    expect(isFontStyleEqual(styles, theme.typography.timestamp)).toEqual(true)
    expect(isVerticalMarginsEqual(styles, 0)).toEqual(true)
  })
})

describe('PhotoSource', () => {
  it('default props', () => {
    const wrapper = mount(applyTheme(<PhotoSource />))
    const element = getWrapperNode(wrapper)
    expect(element.tagName.toLowerCase()).toEqual('span')
    expect(element.textContent).toEqual('')
  })

  it('custom props', () => {
    const wrapper = mount(applyTheme(<PhotoSource {...customProps} />))
    const element = getWrapperNode(wrapper)
    expect(element.tagName.toLowerCase()).toEqual(customProps.tagName)
    expect(isPropsApplied(element, customProps)).toEqual(true)
  })

  it('styles', () => {
    const wrapper = mount(applyTheme(<PhotoSource />))
    const styles = getStyles(wrapper)
    expect(isFontStyleEqual(styles, theme.typography.photoSource)).toEqual(true)
    expect(isVerticalMarginsEqual(styles, 0)).toEqual(true)
  })
})

describe('List', () => {
  it('default props', () => {
    const wrapper = mount(applyTheme(<List />))
    const element = getWrapperNode(wrapper)
    expect(element.tagName.toLowerCase()).toEqual('ul')
    expect(element.textContent).toEqual('')
  })

  it('custom props', () => {
    const wrapper = mount(applyTheme(<List {...customProps} numbered={true} />))
    const element = getWrapperNode(wrapper)
    expect(element.tagName.toLowerCase()).toEqual('ol')
    expect(isPropsApplied(element, customProps)).toEqual(true)
  })

  it('styles', () => {
    const wrapper = mount(
      applyTheme(
        <List>
          <li id="first" />
          <li id="second" />
        </List>
      )
    )
    const styles = getStyles(wrapper)
    expect(isFontStyleEqual(styles, theme.typography.text)).toEqual(true)
    expect(isVerticalMarginsEqual(styles, 30)).toEqual(true)
    expect(styles['padding-left']).toEqual('40px')
    expect(styles['list-style-type']).toEqual('none')

    const firstChildStyles = getStyles(wrapper.find('#first'))
    expect(isVerticalMarginsEqual(firstChildStyles, 0)).toEqual(true)
    expect(firstChildStyles['list-style-type']).toEqual('none')

    const secondChildStyles = getStyles(wrapper.find('#second'))
    expect(isVerticalMarginsEqual(secondChildStyles, 15, 0)).toEqual(true)
    expect(secondChildStyles['list-style-type']).toEqual('none')
  })
})
