"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const hero_entity_1 = require("./entities/hero.entity");
let HeroService = class HeroService {
    constructor(heroesRepository) {
        this.heroesRepository = heroesRepository;
    }
    create(createHeroDto) {
        return this.heroesRepository.save(createHeroDto);
    }
    async findAll() {
        try {
            return await this.heroesRepository.find();
        }
        catch (err) {
            console.log("Impossible search heroes");
            return null;
        }
    }
    async findOne(id) {
        const hero = this.heroesRepository
            .createQueryBuilder("hero")
            .select(["hero.nome"])
            .getOne();
        if (!hero)
            throw new common_1.NotFoundException("Hero not found");
        return hero;
    }
    async update(id, updateHeroDto) {
        const hero = await this.findOne(id);
        try {
            await this.heroesRepository.save(hero);
            return hero;
        }
        catch (err) {
            throw new common_1.InternalServerErrorException("Error saving data to database");
        }
    }
    async remove(heroId) {
        const result = await this.heroesRepository.delete({ id: heroId });
        if (result.affected === 0) {
            throw new common_1.NotFoundException("User with given ID not found");
        }
    }
};
HeroService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(hero_entity_1.Hero)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map