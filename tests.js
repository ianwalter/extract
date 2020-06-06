const { test } = require('@ianwalter/bff')
const { including, excluding } = require('.')

test('excluding a top-level property', t => {
  t
    .expect(excluding({ creamer: 'non-dairy', std: '1 in 4' }, 'std'))
    .toEqual({ creamer: 'non-dairy' })
})

test('excluding a nested property', t => {
  t
    .expect(excluding({ one: { another: 'one', key: 'major' } }, 'one.another'))
    .toEqual({ one: { key: 'major' } })
})

test('excluding multiple', t => {
  t
    .expect(excluding(
      { name: false, chain: { has: false, qty: 0 }, loc: 'hi' },
      ...['loc', 'chain.has']
    ))
    .toEqual({ name: false, chain: { qty: 0 } })
})

test('including top-level properties', t => {
  t
    .expect(including(
      { you: 'can', language: 'body', ok: true },
      ...['you', 'ok']
    ))
    .toEqual({ you: 'can', ok: true })
})

test('including nested properties', t => {
  t
    .expect(including(
      { let: { me: 'go', friend: 'best' }, one: { ok: true }, hoping: true },
      ...['let.me', 'one']
    ))
    .toEqual({ let: { me: 'go' }, one: { ok: true } })
})
