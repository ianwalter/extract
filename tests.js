const { test } = require('@ianwalter/bff')
const without = require('.')

test('without a top-level property', t => {
  t
    .expect(without({ creamer: 'non-dairy', std: '1 in 4' }, 'std'))
    .toEqual({ creamer: 'non-dairy' })
})

test('without a nested property', t => {
  t
    .expect(without({ one: { another: 'one', key: 'major' } }, 'one.another'))
    .toEqual({ one: { key: 'major' } })
})

test('without multiple', t => {
  t
    .expect(without(
      { name: false, chain: { has: false, qty: 0 }, loc: 'hi' },
      'loc',
      'chain.has'
    ))
    .toEqual({ name: false, chain: { qty: 0 } })
})
