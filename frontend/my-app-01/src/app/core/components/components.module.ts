import { PrimengModule } from './../../primeng/primeng.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroInsertDialogComponent } from './hero-insert-dialog/hero-insert-dialog.component';
import { HeroesComponent } from './heroes/heroes.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserInsertDialogComponent } from './user-insert-dialog/user-insert-dialog.component';
import { UsersComponent } from './users/users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksComponent } from './tasks/tasks.component';
import { TaskInsertDialogComponent } from './task-insert-dialog/task-insert-dialog.component';
import { ToastComponent } from './toast/toast.component';

const COMPONENTS = [
  HeroesComponent,
  HeroInsertDialogComponent,
  HeroDetailComponent,
  UsersComponent,
  UserInsertDialogComponent,
  UserDetailComponent,
  TasksComponent,
  TaskInsertDialogComponent,
  ToastComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    PrimengModule,
  ],
  exports: [COMPONENTS],
})
export class ComponentsModule {}
