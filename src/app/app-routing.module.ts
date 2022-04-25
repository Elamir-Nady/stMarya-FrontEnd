import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Components/Admins/admin/admin.component';
import { EditServerComponent } from './Components/Admins/edit-server/edit-server.component';
import { ModeratorComponent } from './Components/Admins/moderator/moderator.component';
import { ServersComponent } from './Components/Admins/servers/servers.component';
import { SubAdminComponent } from './Components/Admins/sub-admin/sub-admin.component';
import { EditChildComponent } from './Components/edit-child/edit-child.component';
import { LoginComponent } from './Components/login/login.component';
import { ServerHomeComponent } from './Components/server-home/server-home.component';
import { ChangePasswordComponent } from './Components/SharedComponents/change-password/change-password.component';
import { AuthGuard } from './Guards/auth.guard';
import { AdminGuard } from './Guards/Roles/admin.guard';
import { ModeratorGuard } from './Guards/Roles/moderator.guard';
import { ServerGuard } from './Guards/Roles/server.guard';
import { SubAdminGuard } from './Guards/Roles/sub-admin.guard';

const routes: Routes = [
  {path:'',redirectTo:"/home",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"myClass",component:ServerHomeComponent,canActivate:[AuthGuard&&ServerGuard]},
  {path:"home",component:ServerHomeComponent,canActivate:[AuthGuard]},
  {path:"admin",component:AdminComponent,canActivate:[AuthGuard&&AdminGuard]},
  {path:"servers",component:ServersComponent,canActivate:[AuthGuard&&(AdminGuard||SubAdminGuard)]},
  {path:"editServer",component:EditServerComponent,canActivate:[AuthGuard]},
  // {path:"subAdmin",component:SubAdminComponent,canActivate:[AuthGuard&&SubAdminGuard]},
  {path:"moderator",component:ModeratorComponent,canActivate:[AuthGuard&&ModeratorGuard]},
  {path:"editChild",component:EditChildComponent,canActivate:[AuthGuard]},
  {path:"changePassword",component:ChangePasswordComponent,canActivate:[AuthGuard]},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
