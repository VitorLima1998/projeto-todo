import { UserDetailComponent } from './core/components/user-detail/user-detail.component';
import { UsersComponent } from './core/components/users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './core/components/hero-detail/hero-detail.component';
import { HeroesComponent } from './core/components/heroes/heroes.component';
import { TasksComponent } from './core/components/tasks/tasks.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroes/:id', component: HeroDetailComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: 'tasks', component: TasksComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
