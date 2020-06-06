import clone from '@ianwalter/clone'
import dot from '@ianwalter/dot'

export default function without (src, ...props) {
  const dest = clone(src)

  for (const prop of props) {
    dot.del(dest, prop)
  }

  return dest
}
