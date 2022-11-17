import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { Task } from "./entities/task.entity";

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    return this.taskRepository.insert(createTaskDto);
  }

  async findAll(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  findOne(id: string): Promise<Task> {
    const task = this.taskRepository
      .createQueryBuilder("task")
      .select(["task.name"])
      .getOne();
    if (!task) throw new NotFoundException("Usuário não encontrado");

    return task;
  }

  async update(updateTaskDto: UpdateTaskDto, id: string) {
    const task = await this.findOne(id);
    const { name } = updateTaskDto;
    task.name = name ? name : task.name;

    try {
      await this.taskRepository.save(task);
      return task;
    } catch (error) {
      throw new InternalServerErrorException(
        "Erro ao salvar os dados no Banco de Dados!"
      );
    }
  }

  async remove(taskId: string) {
    const result = await this.taskRepository.delete({ id: taskId });
    if (result.affected === 0) {
      throw new NotFoundException(
        "Não foi encontrado um usuário com o ID informado"
      );
    }
  }
}
