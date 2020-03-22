import WordArray from '../model/WordArray'

export interface Encoder {
  parse(encodedString: string): WordArray
  stringify(wordArray: WordArray): string
}
