const ua = window && window.navigator.userAgent

export const windowsPhone = ua && /IEMobile|Windows Phone/i.test(ua)
export const ios = ua && /iPhone|iPad|iPod/i.test(ua) && !windowsPhone
export const android = ua && /Android/i.test(ua) && !windowsPhone
