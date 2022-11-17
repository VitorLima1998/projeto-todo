import { Task } from "./entities/task.entity";
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { TaskService } from "./task.service";

@Controller("api/task")
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get("/list/:id")
  findOne(@Param("id") id: string) {
    return this.taskService.findOne(id);
  }

  // @Patch(":id")
  // update(@Param("id") id: string, @Body() updateTaskDto: UpdateTaskDto) {
  //   return this.taskService.update(id, updateTaskDto);
  // }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() task: CreateTaskDto
  ): Promise<Task> {
    return this.taskService.update(task, id);
  }

  @Delete("/:id")
  async remove(@Param("id") id: string) {
    await this.taskService.remove(id);
    return {
      message: "Task removida com sucesso!",
    };
  }
}
