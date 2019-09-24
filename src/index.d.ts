/*
    Венгерская нотация здесь для того, чтобы не выстрелить случайно
    cебе в ногу ибо  существует пропс type совпадающий с
    ключевым словом type
*/
export type TIconPoistion = 'left' | 'right'
export type TVariation = 'regular' | 'awesome'
export type TSize = 'small' | 'medium'
export type TType = 'primary' | 'secondary' | 'outline' | 'flat' | 'danger'
export type TCalVariation = 'service' | 'media'
export type TypographyType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'text'
  | 'quote'
  | 'epigraph'
  | 'source'
  | 'timestamp'
  | 'description'
  | 'galleryDescription'
  | 'photoSource'
  | 'list'

import * as theme from './theme'
import * as Toggle from './Toggle'
import * as Radio from './Radio'
import * as icons from './icons'
import * as Popup from './Popup'
import * as SideNav from './SideNav'
import * as ComplexSearch from './ComplexSearch'
import * as Menu from './Menu'
import * as Snackbar from './Snackbar'
import * as Notification from './Notification'
import * as Tabs from './Tabs'
import * as TagsInput from './TagsInput'
import * as Typography from './Typography'
import * as Stepper from './Stepper'

export {
  theme,
  Toggle,
  Radio,
  icons,
  Popup,
  SideNav,
  ComplexSearch,
  Menu,
  Snackbar,
  Notification,
  Tabs,
  TagsInput,
  Typography,
  Stepper
}

export const version: string
export {default as Button} from './Button'
export {default as Dropdown} from './Dropdown'
export {default as Tooltip} from './Tooltip'
export {default as IconButton} from './IconButton'
export {default as Checkbox} from './Checkbox'
export {default as Switcher} from './Switcher'
export {default as Input} from './Input'
export {default as FormGroup} from './FormGroup'
export {default as InputStatus} from './InputStatus'
export {default as SvgIcon} from './icons/SvgIcon'
export {default as Hint} from './Hint'
export {default as Textarea} from './Textarea'
export {default as Avatar} from './Avatar'
export {default as Spinner} from './Spinner'
export {default as Loader} from './Loader'
export {default as Select} from './Select'
export {default as FieldGroup} from './FieldGroup'
export {default as Pagination} from './Pagination'
export {default as Calendar} from './Calendar'
