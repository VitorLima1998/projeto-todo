import { Repository } from "typeorm";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { Task } from "./entities/task.entity";
export declare class TaskService {
    private taskRepository;
    constructor(taskRepository: Repository<Task>);
    create(createTaskDto: CreateTaskDto): Promise<import("typeorm").InsertResult>;
    findAll(): Promise<Task[]>;
    findOne(id: string): Promise<Task>;
    update(updateTaskDto: UpdateTaskDto, id: string): Promise<Task>;
    remove(taskId: string): Promise<void>;
}
