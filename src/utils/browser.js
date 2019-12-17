const ua =
  typeof window !== 'undefined' &&
  window.navigator &&
  window.navigator.userAgent

export const windowsPhone = ua && /IEMobile|Windows Phone/i.test(ua)
export const ios = ua && /iPhone|iPad|iPod/i.test(ua) && !windowsPhone
export const android = ua && /Android/i.test(ua) && !windowsPhone

export const isIE =
  navigator.userAgent.indexOf('MSIE') !== -1 || !!document.documentMode === true
export const isEdge = !isIE && !!window.StyleMedia
