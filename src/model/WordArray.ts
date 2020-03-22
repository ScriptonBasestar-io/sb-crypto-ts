import { Encoder } from '../interface/Encoder'

export default class WordArray {
  private readonly _words: Array<number>
  get words() {
    return this._words
  }

  private _sigBytes: number
  get sigBytes() {
    return this._sigBytes
  }
  /**
   * Initializes a newly created word array.
   *
   * @param {Array} words (Optional) An array of 32-bit words.
   * @param {number} sigBytes (Optional) The number of significant bytes in the words.
   *
   * @example
   *
   *     var wordArray = CryptoJS.lib.WordArray.create();
   *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
   *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
   */
  constructor(words: Array<number>, sigBytes: number) {
    words = this._words = words || []

    if (sigBytes !== undefined) {
      this._sigBytes = sigBytes
    } else {
      this._sigBytes = words.length * 4
    }
  }

  /**
   * Converts this word array to a string.
   *
   * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
   *
   * @return {string} The stringified word array.
   *
   * @example
   *
   *     var string = wordArray + '';
   *     var string = wordArray.toString();
   *     var string = wordArray.toString(CryptoJS.enc.Utf8);
   */
  toString(encoder: Encoder): string {
    return encoder.stringify(this)
  }

  // toString():string {
  //   return Hex.stringify(this)
  // }

  /**
   * Concatenates a word array to this word array.
   *
   * @param {WordArray} wordArray The word array to append.
   *
   * @return {WordArray} This word array.
   *
   * @example
   *
   *     wordArray1.concat(wordArray2);
   */
  concat(wordArray: WordArray): WordArray {
    // Shortcuts
    const thisWords = this.words
    const thatWords = wordArray.words
    const thisSigBytes = this.sigBytes
    const thatSigBytes = wordArray.sigBytes

    // Clamp excess bits
    this.clamp()

    // Concat
    if (thisSigBytes % 4) {
      // Copy one byte at a time
      for (let i = 0; i < thatSigBytes; i++) {
        const thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff
        thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8)
      }
    } else {
      // Copy one word at a time
      for (let i = 0; i < thatSigBytes; i += 4) {
        thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2]
      }
    }
    this._sigBytes += thatSigBytes

    // Chainable
    return this
  }

  /**
   * Removes insignificant bits.
   *
   * @example
   *
   *     wordArray.clamp();
   */
  clamp() {
    // Shortcuts
    const words = this.words
    const sigBytes = this.sigBytes

    // Clamp
    words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8)
    words.length = Math.ceil(sigBytes / 4)
  }

  /**
   * Creates a copy of this word array.
   *
   * @return {WordArray} The clone.
   *
   * @example
   *
   *     var clone = wordArray.clone();
   */
  clone(): WordArray {
    return new WordArray(this.words.slice(0), this.sigBytes)
  }

  /**
   * Creates a word array filled with random bytes.
   *
   * @param {number} nBytes The number of random bytes to generate.
   *
   * @return {WordArray} The random word array.
   *
   * @static
   *
   * @example
   *
   *     var wordArray = CryptoJS.lib.WordArray.random(16);
   */
  // random (nBytes:number): WordArray {
  //   const words = [];
  //
  //   for (let i = 0; i < nBytes; i += 4) {
  //     words.push(cryptoSecureRandomInt());
  //   }
  //
  //   return new WordArray(words, nBytes);
  // }
}
