export default interface Crypt {
  encrypt(value: string): string
  decrypt(value: string): string
}
