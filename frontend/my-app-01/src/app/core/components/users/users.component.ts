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
  displayedColumns: string[] = ['id', 'name'];

  selectedUser?: User;
  id?: string;
  name?: string;
  dataSource: User[] = [];

  @ViewChild(MatTable) table!: MatTable<User>;

  displayColumns: string[] = ['id', 'name', 'action'];

  constructor(private userService: UserService, public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(UserInsertDialogComponent, {
      width: '250px',
      data: { id: this.id, name: this.name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        let user: User = { name: result };

        this.userService.addUser(user).subscribe({
          next: (user) => {
            console.log(user);
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
