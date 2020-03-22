import { Encoder } from '../interface/Encoder'
import WordArray from '../model/WordArray'

declare function escape(s: string): string
declare function unescape(s: string): string

export default class Latin1 implements Encoder {
  parse(latin1Str: string): WordArray {
    // Shortcut
    const latin1StrLength = latin1Str.length

    // Convert
    const words: Array<number> = []
    for (let i = 0; i < latin1StrLength; i++) {
      words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8)
    }

    return new WordArray(words, latin1StrLength)
  }

  stringify(wordArray: WordArray): string {
    // Convert
    const latin1Chars = []
    for (let i = 0; i < wordArray.sigBytes; i++) {
      const bite = (wordArray.words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff
      latin1Chars.push(String.fromCharCode(bite))
    }

    return latin1Chars.join('')
  }
}
