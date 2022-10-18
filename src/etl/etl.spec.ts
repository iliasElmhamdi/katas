import { etl } from './etl'

describe('fizzBuzz', () => {
  it('is etl', () => {
    const myEtl = etl()
    expect(myEtl).toBe(true)
  })
})
