import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';
import { UserInsertDialogComponent } from '../user-insert-dialog/user-insert-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  panelOpenState = false;
  displayedColumns: string[] = ['userTable'];

  selectedUser?: User;
  id?: string;
  name?: string;
  dataSource: User[] = [];

  @ViewChild(MatTable) table!: MatTable<User>;

  constructor(private userService: UserService, public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(UserInsertDialogComponent, {
      width: '250px',
      data: { id: this.id, name: this.name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        // console.log(result);
        let user: User = {
          name: result.name,
          password: result.password,
          email: result.email,
        };

        // console.log(user);

        this.userService.addUser(user).subscribe({
          next: (user) => {
            // console.log(user);
            this.getUsers(); // Atualizar o data Source
          },
          error: (err) => {
            console.error(err);
          },
        });

        this.table.renderRows();
      }
    });
  }

  async removeUser(id: string) {
    await this.userService.removeUser(id).subscribe({
      next: () => {
        // console.log(user);
        alert('User deleted successfully');
        this.getUsers();
      },
      error: () => {
        alert('Error while deleting the User');
      },
    });

    this.table.renderRows();
  }

  updateUser(user: User) {
    this.userService.updateUser(user, user.id as string).subscribe({
      next: (user) => {
        // console.log(user);
        this.getUsers(); // Atualizar o data Source
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

  ngOnInit(): void {
    this.getUsers();
  }

  selectUser(user: User): void {
    this.selectedUser = user;
  }

  getUsers(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.dataSource = data;
        // console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
}