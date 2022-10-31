import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
} from "@nestjs/common";
import { HeroService } from "./hero.service";
import { CreateHeroDto } from "./dto/create-hero.dto";
import { UpdateHeroDto } from "./dto/update-hero.dto";

@Controller("api/hero")
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Post()
  create(@Body() createHeroDto: CreateHeroDto) {
    return this.heroService.create(createHeroDto);
  }

  @Get()
  findAll() {
    return this.heroService.findAll();
  }

  @Get("/list/:id")
  findOne(@Param("id") id: string) {
    return this.heroService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body(ValidationPipe) updateHeroDto: UpdateHeroDto
  ) {
    return this.heroService.update(id, updateHeroDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    await this.heroService.remove(id);

    return {
      message: "Hero remove successfully!",
    };
  }
}
