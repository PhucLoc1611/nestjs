import { Exclude, Expose, Type } from 'class-transformer'
import { IsString } from 'class-validator'
import { SuccessResDTO } from 'src/shared/share.dto'

export class LoginBodyDTO {
  @IsString()
  email: string
  @IsString()
  password: string
}
export class RegisterBody extends LoginBodyDTO {
  @IsString({ message: 'tên phải là chuỗi' })
  name: string
  @IsString()
  confirmPassword: string
}
class RegisterData {
  id: number
  email: string
  name: string
  @Exclude()
  password: string
  createAt: Date
  updateAt: Date
  // @Expose()
  // get emailname() {
  //   return `${this.email} - ${this.name}`
  // }
  constructor(partial: Partial<RegisterData>) {
    Object.assign(this, partial)
  }
}

export class RegisterResDTO extends SuccessResDTO<RegisterData> {
  @Type(() => RegisterData)
  declare data: RegisterData
  constructor(partial: Partial<RegisterResDTO>) {
    super(partial)
    Object.assign(this, partial)
  }
}
