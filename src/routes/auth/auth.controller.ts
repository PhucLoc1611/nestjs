import { Body, ClassSerializerInterceptor, Controller, Post, SerializeOptions, UseInterceptors } from '@nestjs/common'
import { AuthService } from './auth.service'
import { RegisterBody, RegisterResDTO } from './auth.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @SerializeOptions({ type: RegisterResDTO })
  @Post('register')
  async register(@Body() body: RegisterBody) {
    // console.log(body)
    console.log('....Controller')

    return await this.authService.register(body)
    // return new RegisterResDTO(await this.authService.register(body))
  }
}
