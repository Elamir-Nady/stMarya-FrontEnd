import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { ServerHomeComponent } from './Components/server-home/server-home.component';
import { HeaderComponent } from './Components/SharedComponents/header/header.component';
import { EditChildComponent } from './Components/edit-child/edit-child.component';
import { ChangePasswordComponent } from './Components/SharedComponents/change-password/change-password.component';
import { AdminComponent } from './Components/Admins/admin/admin.component';
import { SubAdminComponent } from './Components/Admins/sub-admin/sub-admin.component';
import { ModeratorComponent } from './Components/Admins/moderator/moderator.component';
import { ServersComponent } from './Components/Admins/servers/servers.component';
import { EditServerComponent } from './Components/Admins/edit-server/edit-server.component';
import { GeneralServerComponent } from './Components/general-server/general-server.component';
import { PhotoComponent } from './Components/SharedComponents/photo/photo.component';
import { AttendRequestComponent } from './Components/Admins/attend-request/attend-request.component';
import { AttendRequestsComponent } from './Components/Admins/attend-requests/attend-requests.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ServerHomeComponent,
    HeaderComponent,
    EditChildComponent,
    ChangePasswordComponent,
    AdminComponent,
    SubAdminComponent,
    ModeratorComponent,
    ServersComponent,
    EditServerComponent,
    GeneralServerComponent,
    PhotoComponent,
    AttendRequestComponent,
    AttendRequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
