import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
  ValidationPipe,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { UserService } from "./user.service";

@Controller("api/user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get("/list/:id")
  findOne(@Param("id") id: string) {
    return this.userService.findOne(id);
  }

  @Get(":email")
  @UseGuards(AuthGuard())
  findByEmail(@Param("email") email: string) {
    return this.userService.findByEmail(email);
  }

  @Put()
  update(@Body() createUserDto: CreateUserDto) {
    return this.userService.update(createUserDto);
  }
  // async update(
  //   @Param("id") id: string,
  //   @Body() user: CreateUserDto
  // ): Promise<User> {
  //   return this.userService.update(user, id);
  // }

  @Delete("/:id")
  async remove(@Param("id") id: string) {
    await this.userService.remove(id);
    return {
      message: "Usuário removido com sucesso!",
    };
  }
}
