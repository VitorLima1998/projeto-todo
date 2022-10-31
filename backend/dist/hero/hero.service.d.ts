import { Repository } from "typeorm";
import { CreateHeroDto } from "./dto/create-hero.dto";
import { UpdateHeroDto } from "./dto/update-hero.dto";
import { Hero } from "./entities/hero.entity";
export declare class HeroService {
    private heroesRepository;
    constructor(heroesRepository: Repository<Hero>);
    create(createHeroDto: CreateHeroDto): Promise<CreateHeroDto & Hero>;
    findAll(): Promise<Hero[]>;
    findOne(id: string): Promise<Hero>;
    update(id: string, updateHeroDto: UpdateHeroDto): Promise<Hero>;
    remove(heroId: string): Promise<void>;
}
