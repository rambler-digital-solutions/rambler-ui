/**
 * Компонент кнопки
 * Скетч: https://app.zeplin.io/project.html#pid=5788d29d450aa06b5691c466&sid=5788d41ba2e261bb69d6c68e
 */
import React, { PureComponent } from "react"

declare type ButtonProps = {
    type?: TType
    href?: string
    target?: string
    className?: string
    style?: object
    icon?: React.ReactNode
    iconPosition?: TIconPoistion
    size?: TSize
    onClick?: (...args: any[]) => any
    container?: JSX.Element
    overlay?: JSX.Element
    disabled?: boolean
    block?: boolean
    buttonType?: string
    width?: number | string
    loading?: boolean
    rounded?: boolean
}
export default class Button extends PureComponent<ButtonProps, {}> {
    renderIcon(icon: any): import("react").DetailedReactHTMLElement<any, HTMLElement>;
    render(): import("react").FunctionComponentElement<any>;
}
