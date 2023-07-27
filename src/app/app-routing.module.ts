import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:"dashboard",
    component:MaincontentComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"addUser",
    component:AddUserComponent
  },
  {
    path:"editUser",
    component:EditUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
