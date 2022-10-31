import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateHeroDto } from "./dto/create-hero.dto";
import { UpdateHeroDto } from "./dto/update-hero.dto";
import { Hero } from "./entities/hero.entity";

@Injectable()
export class HeroService {
  constructor(
    @InjectRepository(Hero)
    private heroesRepository: Repository<Hero>
  ) {}

  create(createHeroDto: CreateHeroDto) {
    return this.heroesRepository.save(createHeroDto);
  }

  async findAll(): Promise<Hero[]> {
    try {
      return await this.heroesRepository.find();
    } catch (err) {
      console.log("Impossible search heroes");
      return null;
    }
  }

  async findOne(id: string): Promise<Hero> {
    const hero = this.heroesRepository
      .createQueryBuilder("hero")
      .select(["hero.nome"])
      .getOne();

    if (!hero) throw new NotFoundException("Hero not found");

    return hero;
  }

  async update(id: string, updateHeroDto: UpdateHeroDto) {
    const hero = await this.findOne(id);
    try {
      await this.heroesRepository.save(hero);
      return hero;
    } catch (err) {
      throw new InternalServerErrorException("Error saving data to database");
    }
  }

  async remove(heroId: string) {
    const result = await this.heroesRepository.delete({ id: heroId });
    if (result.affected === 0) {
      throw new NotFoundException("User with given ID not found");
    }
  }
}
