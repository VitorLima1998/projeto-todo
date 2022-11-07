import { PartialType } from "@nestjs/mapped-types";
import { IsEmail, IsOptional, IsString } from "class-validator";
import { CreateUserDto } from "./create-user.dto";

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  @IsString({
    message: "Enter the valid username",
  })
  name: string;

  @IsOptional()
  @IsEmail(
    {},
    {
      message: "Informe um endereço de email válido",
    }
  )
  email: string;

  @IsOptional()
  status: boolean;
}
