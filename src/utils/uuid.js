let i = 0
let now = 0
const prefix = Math.random()
  .toString(36)
  .slice(2)

export default function uuid() {
  const currentNow = Date.now()
  if (currentNow > now) {
    now = currentNow
    i = 0
  }
  return prefix + '-' + now + '-' + i++
}
