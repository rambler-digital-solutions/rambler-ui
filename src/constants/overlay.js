export const POINTS_X = ['left', 'right', 'center']
export const POINTS_Y = ['top', 'bottom', 'center']
/**
 * Правила переноса контента, если он выходит за пределы видимости
 */
export const MAPPING_POINTS = {
  right: 'left',
  left: 'right',
  center: 'center',
  bottom: 'top',
  top: 'bottom'
}
