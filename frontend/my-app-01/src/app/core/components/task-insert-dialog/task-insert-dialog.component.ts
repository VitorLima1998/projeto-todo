import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../model/task';

@Component({
  selector: 'app-task-insert-dialog',
  templateUrl: './task-insert-dialog.component.html',
  styleUrls: ['./task-insert-dialog.component.css'],
})
export class TaskInsertDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<TaskInsertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task,
    private taskService: TaskService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  removeUser(id: string) {
    console.log('test');
    // this.taskService.removeTask(id);
  }
}
