import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-insert-dialog',
  templateUrl: './user-insert-dialog.component.html',
  styleUrls: ['./user-insert-dialog.component.css'],
})
export class UserInsertDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<UserInsertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private userService: UserService
  ) {}

  onNoClick(): void {
    console.log(this.data);
    this.dialogRef.close();
  }

  removeUser(id: string) {
    console.log('test');
    this.userService.removeUser(id);
  }

  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  onSubmit() {
    console.warn(this.userForm.value);
  }
}
