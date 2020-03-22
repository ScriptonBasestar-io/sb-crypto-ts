import Code from '../interface/Code'

export default class Unicode implements Code {
  getCode(value: number): string {
    return String.fromCharCode(value & 65535)
  }

  getNumber(value: string): number {
    return value.charCodeAt(0) & 65535
  }
}
