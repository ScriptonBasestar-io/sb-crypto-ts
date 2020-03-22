import { Encoder } from '../interface/Encoder'
import WordArray from '../model/WordArray'
import Latin1 from './Latin1'

export default class Utf8 extends Latin1 {
  parse(utf8Str: string): WordArray {
    return super.parse(unescape(encodeURIComponent(utf8Str)))
  }

  stringify(wordArray: WordArray): string {
    try {
      return decodeURIComponent(escape(super.stringify(wordArray)))
    } catch (e) {
      throw new Error('Malformed UTF-8 data')
    }
  }
}
