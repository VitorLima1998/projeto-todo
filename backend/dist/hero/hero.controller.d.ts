import { HeroService } from "./hero.service";
import { CreateHeroDto } from "./dto/create-hero.dto";
import { UpdateHeroDto } from "./dto/update-hero.dto";
export declare class HeroController {
    private readonly heroService;
    constructor(heroService: HeroService);
    create(createHeroDto: CreateHeroDto): any;
    findAll(): Promise<{}>;
    findOne(id: string): Promise<import("./entities/hero.entity").Hero>;
    update(id: string, updateHeroDto: UpdateHeroDto): unknown;
    remove(id: string): unknown;
}
