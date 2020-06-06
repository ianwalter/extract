import clone from '@ianwalter/clone'
import dot from '@ianwalter/dot'

export function excluding (src, ...props) {
  const dest = clone(src)

  for (const prop of props) {
    dot.del(dest, prop)
  }

  return dest
}

export function including (src, ...props) {
  const dest = {}

  for (const prop of props) {
    dot.set(dest, prop, dot.get(src, prop))
  }

  return dest
}
