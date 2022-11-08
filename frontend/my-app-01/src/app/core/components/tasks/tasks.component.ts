import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/task';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  // todoT: Task[] = [
  //   { id: 'task1', task: 'tarefa1', status: 'do' },
  //   { id: 'task2', task: 'tarefa2', status: 'do' },
  //   { id: 'task3', task: 'tarefa3', status: 'do' },
  //   { id: 'task4', task: 'tarefa4', status: 'do' },
  //   { id: 'task5', task: 'tarefa5', status: 'do' },
  //   { id: 'task6', task: 'tarefa6', status: 'do' },
  // ];

  todoT!: Task[];

  todoDoing: Task[] = [];
  todoDone: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        this.todoT = tasks;
      },
      error: (e) => {
        console.error(e);
      },
    });
  }
  // todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  // done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
