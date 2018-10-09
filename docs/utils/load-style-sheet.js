export default function loadStyleSheet(href) {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')

    link.onload = () => {
      resolve(link)
    }

    link.onerror = () => {
      reject(new Error('font stylesheet not loaded'))
    }

    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = href

    document.head.appendChild(link)
  })
}
