import { Hex } from '../../src/encoder/Hex'

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('Hex text', () => {
    expect(new Hex()).toBeInstanceOf(Hex)
  })

  it('parse string', () => {
    const hex = new Hex()
    const hexString = hex.parse('aaaaaa')
    const text = hex.stringify(hexString)
    console.log(hexString)
    console.log(text)
    expect('aaaaaa').toEqual('')
  })
})
