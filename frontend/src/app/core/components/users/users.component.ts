import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { MessageService } from 'primeng/api';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';
import { UserInsertDialogComponent } from '../user-insert-dialog/user-insert-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [MessageService],
})
export class UsersComponent implements OnInit {
  panelOpenState = false;
  displayedColumns: string[] = ['userTable'];

  selectedUser?: User;
  id?: string;
  name?: string;
  dataSource: User[] = [];

  @ViewChild(MatTable) table!: MatTable<User>;

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    public dialog: MatDialog
  ) {}

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

        // Adicionar usuário

        this.userService.addUser(user).subscribe({
          next: (user) => {
            this.getUsers();
          },
          error: (err) => {
            console.error(err);
          },
        });
        this.showMessage('success', 'User created successfully!');
        this.table.renderRows();
      }
    });
  }

  // Remover Usuário

  async removeUser(id: string) {
    await this.userService.removeUser(id).subscribe({
      next: () => {
        this.getUsers();
      },
      error: () => {
        alert('Error while deleting the User');
      },
    });
    this.showMessage('warn', 'User deleted successfully!');
    this.table.renderRows();
  }

  // Atualizar usuário

  editUser(u: User) {
    const dialogRef = this.dialog
      .open(UserInsertDialogComponent, {
        width: '250px',
        data: u,
      })
      .afterClosed()
      .subscribe({
        next: (u) => {
          // console.log(u);
          this.userService.updateUser(u).subscribe({
            next: (u) => {
              this.showMessage('info', 'User updated successfully!');
            },
            error: (e) => {
              console.error(e);
            },
          });
          this.getUsers();
        },
      });
  }

  ngOnInit(): void {
    this.getUsers();
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

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

  selectUser(user: User): void {
    this.selectedUser = user;
  }

  showMessage(typeToast: string, Msg: string) {
    this.messageService.add({
      severity: typeToast,
      detail: Msg,
    });
  }
}

// Filtrar(props: string, lista: task[]){}
