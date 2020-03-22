import ASCII from '../../src/code/ASCII'

describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('ASCII A === 65', () => {
    // console.log(String.fromCharCode(65))
    expect('A').toEqual(String.fromCharCode(65))
    expect(65).toEqual('A'.charCodeAt(0))
  })

  it('ASCII ', () => {
    const ascii = new ASCII()
    console.log(-2, ascii.getCode(-2))
    console.log(-1, ascii.getCode(-1))
    console.log(0, ascii.getCode(0))
    console.log(1, ascii.getCode(1))
    console.log(2, ascii.getCode(2))
    console.log(254, ascii.getCode(254))
    console.log(255, ascii.getCode(255))
    console.log(256, ascii.getCode(256))
    console.log(257, ascii.getCode(257))
    console.log(258, ascii.getCode(258))
    console.log(259, ascii.getCode(259))
    console.log(260, ascii.getCode(260))
    console.log(261, ascii.getCode(261))
    console.log(1000, ascii.getCode(1000))
    console.log(65535, ascii.getCode(65535))
    console.log(65536, ascii.getCode(65536))
    console.log(65537, ascii.getCode(65537))
    console.log(65538, ascii.getCode(65538))
  })
})
