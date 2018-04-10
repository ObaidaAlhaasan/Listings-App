import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';
import { ListingsComponent } from './components/listings/listings.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { AddListComponent } from './components/add-list/add-list.component';
import { EditListComponent } from './components/edit-list/edit-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-list', component: AddListComponent },
  { path: 'edit-list/:id', component: EditListComponent },

  { path: 'listing/:id', component: ListItemComponent },

  { path: 'register', component: RegisterComponent },


  { path: 'listings', component: ListingsComponent },
  { path: '**', component: NoPageFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
