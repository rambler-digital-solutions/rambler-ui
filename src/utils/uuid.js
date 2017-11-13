let i = 0
const random = Math.random().toString(36).slice(2)

export default function uuid() {
  return random + i++
}
