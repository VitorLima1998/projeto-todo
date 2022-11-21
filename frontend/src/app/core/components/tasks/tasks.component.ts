import { TaskInsertDialogComponent } from './../task-insert-dialog/task-insert-dialog.component';
import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/task';
import { TaskService } from '../../services/task.service';
import {
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
  toDo!: Task[];
  todoDoing: Task[] = [];
  todoDone: Task[] = [];

  constructor(private taskService: TaskService, public dialog: MatDialog) {}

  // Inicializando a tela com a lista de tasks cadastradas
  ngOnInit(): void {
    console.log('teste...');
    this.getTasks();
  }

  // Função de listar todas as tasks
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

  // Drag and Drop da tela principal
  drop(event: CdkDragDrop<Task[]>) {
    // console.log(this.todoDoing);
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
      const t = event.item.data;

      let s = event.container.element.nativeElement.classList[1];

      if (s == 'todo') {
        t.status = 'todo';
      } else if (s == 'doing') {
        t.status = 'doing';
      } else {
        t.status = 'done';
      }

      this.taskService.update(t).subscribe({
        next: (t) => {
          console.log(t);
        },
        error: (e) => {
          console.log(e);
        },
      });

      console.log(event);
    }
  }
  // Tela de cadastrar tarefa
  openDialog(): void {
    const dialogRef = this.dialog.open(TaskInsertDialogComponent, {
      width: '300px',
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
