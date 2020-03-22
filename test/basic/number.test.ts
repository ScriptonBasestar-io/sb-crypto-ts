describe('Number test once', () => {
  it('number test', () => {
    let decimal: number = 123
    let binary: number = 0b1111011
    let octal: number = 0o173
    let hex: number = 0x7b
    // console.log("decimal", decimal)
    // console.log("binary", binary, decimal.toString(2))
    // console.log("octal", octal, decimal.toString(8))
    // console.log("hex", hex, decimal.toString(16))
    expect(decimal === binary || decimal === octal || decimal === hex).toBeTruthy()
    expect(binary.toString(2)).toEqual(decimal.toString(2))
    expect(octal.toString(8)).toEqual(decimal.toString(8))
    expect(octal.toString(16)).toEqual(decimal.toString(16))
  })

  it('bit test', () => {
    console.log(-2, -2 & 255)
    console.log(-1, -1 & 255)
    console.log(0, 1 & 255)
    console.log(1, 1 & 255)
    console.log(2, 2 & 255)
    console.log(3, 3 & 255)
    console.log(255, 255 & 255)
    console.log(256, 256 & 255)
    console.log(257, 257 & 255)
    console.log(258, 258 & 255)
  })

  it('bit number binary', () => {
    console.log(-256, Number(-256).toString(2), 0b00000000)
    console.log(-255, Number(-255).toString(2))
    console.log(-254, Number(-254).toString(2))
    console.log(-1, Number(-1).toString(2))
    console.log(0, Number(0).toString(2))
    console.log(1, Number(1).toString(2))
    console.log(255, Number(255).toString(2))
  })

  it('bit test 2', () => {
    console.log(bittest(-254))
    console.log(bittest(-1))
    console.log(bittest(0))
    console.log(bittest(1))
    console.log(bittest(254))
    console.log(bittest(255))
    console.log(bittest(256))
  })
})

function bittest(s: number): number {
  const c1 = s & 255 // < mnopqrst first 8 bits
  const c2 = (s >> 8) & 255 //    from abcdefghijklmnopqrst >> 8 = abcdefghijkl & b11111111 = efghijkl
  return (c1 << 8) + c2 // < (mnopqrst00000000) + efghijkl = mnopqrstefghijkl
}
