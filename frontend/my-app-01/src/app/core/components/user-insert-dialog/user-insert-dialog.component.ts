import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-insert-dialog',
  templateUrl: './user-insert-dialog.component.html',
  styleUrls: ['./user-insert-dialog.component.css'],
})
export class UserInsertDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<UserInsertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
