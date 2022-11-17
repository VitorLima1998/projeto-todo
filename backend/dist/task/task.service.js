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
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const task_entity_1 = require("./entities/task.entity");
let TaskService = class TaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async create(createTaskDto) {
        return this.taskRepository.insert(createTaskDto);
    }
    async findAll() {
        return await this.taskRepository.find();
    }
    findOne(id) {
        const task = this.taskRepository
            .createQueryBuilder("task")
            .select(["task.name"])
            .getOne();
        if (!task)
            throw new common_1.NotFoundException("Usuário não encontrado");
        return task;
    }
    async update(updateTaskDto, id) {
        const task = await this.findOne(id);
        const { name } = updateTaskDto;
        task.name = name ? name : task.name;
        try {
            await this.taskRepository.save(task);
            return task;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("Erro ao salvar os dados no Banco de Dados!");
        }
    }
    async remove(taskId) {
        const result = await this.taskRepository.delete({ id: taskId });
        if (result.affected === 0) {
            throw new common_1.NotFoundException("Não foi encontrado um usuário com o ID informado");
        }
    }
};
TaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map