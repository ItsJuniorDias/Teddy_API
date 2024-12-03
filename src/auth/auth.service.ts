import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { AuthDto } from "./dtos/auth-user.dto";

export interface UsersProps {
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user: any = await this.userService.findLogin(email, pass);

    if (user?.email !== email) {
      throw new UnauthorizedException();
    }

    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { email: user.email, password: user.password };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
