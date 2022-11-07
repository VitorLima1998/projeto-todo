import { Task } from "src/task/entities/task.entity";
export declare class CreateUserDto {
    id: string;
    name: string;
    email: string;
    status: boolean;
    password: string;
    passwordConfirmation: string;
    confirmationToken: string;
    salt: string;
    createAt: Date;
    updateAt: Date;
    task: Task;
}
