import Code from '../interface/Code'

export default class ASCII implements Code {
  getCode(value: number): string {
    // value scope loop 0 - 256, -1 to 255, 256 to 0
    return String.fromCharCode(value & 255)
  }

  // TODO 이렇게 루프형태로 처리할지 오류값이 들어왔을 때 예외를 발생시킬지? 예외가 나을 것 같은데
  getNumber(value: string): number {
    return value.charCodeAt(0) & 255
  }
}
