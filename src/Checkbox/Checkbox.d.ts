import { Component } from "react"
import {TIconPoistion, TSize, TVariation} from '../../index'

declare interface CheckboxProps {
    name?: string
    disabled?: boolean
    className?: string
    style?: object
    iconPosition?: TIconPoistion
    checked?: boolean
    indeterminate?: boolean
    onCheck?: (...args: any[]) => any
    checkboxStyle?: object
    checkboxClassName?: string
    labelStyle?: object
    labelClassName?: string
    variation?: TVariation
    size?: TSize
}

export default class Checkbox extends Component<CheckboxProps, {}> {
    input: HTMLInputElement
    onChange: (event: any) => void
}
