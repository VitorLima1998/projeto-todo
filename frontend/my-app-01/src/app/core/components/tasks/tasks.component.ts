import { TaskInsertDialogComponent } from './../task-insert-dialog/task-insert-dialog.component';
import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/task';
import { TaskService } from '../../services/task.service';
import { Dialog, DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import {
  CdkDrag,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';

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

  toDo!: Task[];
  todoDoing: Task[] = [];
  todoDone: Task[] = [];

  constructor(private taskService: TaskService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        this.toDo = tasks;
      },
      error: (e) => {
        console.error(e);
      },
    });
  }

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
    if (event.container.id == 'cdk-drop-list-1') {
      console.log('alterar status para doing');
    } else if (event.container.id == 'cdk-drop-list-2') {
      console.log('alterar status para done');
      let id = this.todoDone.length;
      // this.todoDone[0].status = 'done';
      console.log(this.todoDone);
    } else {
      console.log('alterar status para to do');
      console.log(event.container.data);
    }
  }

  doing(item: CdkDrag<Task>) {
    console.log(item.data);
    return true;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TaskInsertDialogComponent, {
      width: '250px',
      data: { name: '', status: '' },
    });

    dialogRef.afterClosed().subscribe((task) => {
      if (task !== undefined) {
        task.status = 'ToDo';
        console.log(task);

        this.taskService.addTask(task).subscribe({
          next: (task) => {
            this.getTasks();
          },
          error: (err) => {
            console.error(err);
          },
        });
      }
    });
  }
}
