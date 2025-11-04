export class SuccessResDTO<T = any> {
  statuscode: string
  data: T

  constructor(partial: Partial<SuccessResDTO>) {
    Object.assign(this, partial)
  }
}
