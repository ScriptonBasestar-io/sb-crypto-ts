// https://gist.github.com/faisalman/4213592

const ConvertBase = function(num: string) {
  return {
    from: function(baseFrom: 2 | 8 | 10 | 16) {
      return {
        to: function(baseTo: 2 | 8 | 10 | 16): string {
          return parseInt(num, baseFrom).toString(baseTo)
        }
      }
    }
  }
}

// binary to decimal
ConvertBase.bin2dec = function(num: string) {
  return ConvertBase(num)
    .from(2)
    .to(10)
}

// binary to hexadecimal
ConvertBase.bin2hex = function(num: string) {
  return ConvertBase(num)
    .from(2)
    .to(16)
}

// decimal to binary
ConvertBase.dec2bin = function(num: string) {
  return ConvertBase(num)
    .from(10)
    .to(2)
}

// decimal to hexadecimal
ConvertBase.dec2hex = function(num: string) {
  return ConvertBase(num)
    .from(10)
    .to(16)
}

// hexadecimal to binary
ConvertBase.hex2bin = function(num: string) {
  return ConvertBase(num)
    .from(16)
    .to(2)
}

// hexadecimal to decimal
ConvertBase.hex2dec = function(num: string) {
  return ConvertBase(num)
    .from(16)
    .to(10)
}

export default ConvertBase
