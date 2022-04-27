import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Components/Admins/admin/admin.component';
import { AttendRequestComponent } from './Components/Admins/attend-request/attend-request.component';
import { AttendRequestsComponent } from './Components/Admins/attend-requests/attend-requests.component';
import { EditServerComponent } from './Components/Admins/edit-server/edit-server.component';
import { ModeratorComponent } from './Components/Admins/moderator/moderator.component';
import { ServersComponent } from './Components/Admins/servers/servers.component';
import { SubAdminComponent } from './Components/Admins/sub-admin/sub-admin.component';
import { EditChildComponent } from './Components/edit-child/edit-child.component';
import { GeneralServerComponent } from './Components/general-server/general-server.component';
import { LoginComponent } from './Components/login/login.component';
import { ServerHomeComponent } from './Components/server-home/server-home.component';
import { ChangePasswordComponent } from './Components/SharedComponents/change-password/change-password.component';
import { PhotoComponent } from './Components/SharedComponents/photo/photo.component';
import { AuthGuard } from './Guards/auth.guard';
import { AdminGuard } from './Guards/Roles/admin.guard';
import { GeneralClassGuard } from './Guards/Roles/generalClass.guard';
import { ModeratorGuard } from './Guards/Roles/moderator.guard';
import { ServerGuard } from './Guards/Roles/server.guard';
import { SubAdminGuard } from './Guards/Roles/sub-admin.guard';

const routes: Routes = [
  {path:'',redirectTo:"/photo",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"myClass",component:ServerHomeComponent,canActivate:[AuthGuard&&ServerGuard]},
  {path:"home",component:PhotoComponent,canActivate:[AuthGuard]},
  {path:"admin",component:AdminComponent,canActivate:[AuthGuard&&(AdminGuard)]},
  {path:"servers",component:ServersComponent,canActivate:[AuthGuard&&(AdminGuard)]},
  {path:"allservers",component:ServersComponent,canActivate:[AuthGuard&&(SubAdminGuard)]},
  {path:"editServer",component:EditServerComponent,canActivate:[AuthGuard]},
  {path:"subAdmin",component:SubAdminComponent,canActivate:[AuthGuard&&SubAdminGuard]},
  {path:"moderator",component:ModeratorComponent,canActivate:[AuthGuard&&ModeratorGuard]},
  {path:"editChild",component:EditChildComponent,canActivate:[AuthGuard]},
  {path:"changePassword",component:ChangePasswordComponent,canActivate:[AuthGuard]},
  {path:"generalServer",component:GeneralServerComponent,canActivate:[AuthGuard&&ServerGuard]},
  {path:"photo",component:PhotoComponent,canActivate:[AuthGuard]},
  {path:"attendRequest",component:AttendRequestComponent,canActivate:[AuthGuard]},
  {path:"attendRequests",component:AttendRequestsComponent,canActivate:[AuthGuard&&SubAdminGuard]},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
