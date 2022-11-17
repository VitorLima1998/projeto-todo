import { Task } from "./entities/task.entity";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TaskService } from "./task.service";
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(createTaskDto: CreateTaskDto): Promise<import("typeorm").InsertResult>;
    findAll(): Promise<Task[]>;
    findOne(id: string): Promise<Task>;
    update(id: string, task: CreateTaskDto): Promise<Task>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
