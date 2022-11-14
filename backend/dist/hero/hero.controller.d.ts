import { HeroService } from "./hero.service";
import { CreateHeroDto } from "./dto/create-hero.dto";
import { UpdateHeroDto } from "./dto/update-hero.dto";
export declare class HeroController {
    private readonly heroService;
    constructor(heroService: HeroService);
    create(createHeroDto: CreateHeroDto): Promise<CreateHeroDto & import("./entities/hero.entity").Hero>;
    findAll(): Promise<import("./entities/hero.entity").Hero[]>;
    findOne(id: string): Promise<import("./entities/hero.entity").Hero>;
    update(id: string, updateHeroDto: UpdateHeroDto): Promise<import("./entities/hero.entity").Hero>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
