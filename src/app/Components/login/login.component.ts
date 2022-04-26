import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { FlagsService } from 'src/app/Services/flags.service';
import { GenericService } from 'src/app/Services/generic.service';
import { ILogin } from 'src/app/ViewModels/ilogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginModel:ILogin;
  NotAuth:boolean=false;
 

  constructor(private formBuilder: FormBuilder,private genericService:GenericService,
              private router:Router,private flagsService:FlagsService) {
    this.loginForm = this.formBuilder.group({
      Id: [ Validators.required],
      Password: [ '',Validators.required],
    });
    this.loginModel={id:0,password:""};
    this.flagsService.logout();

   }

  ngOnInit(): void {
  }

  login(){
    this.flagsService.logout();

    this.loginModel.id=this.loginForm.get('Id')?.value;
    this.loginModel.password=this.loginForm.get('Password')?.value;
    this.genericService.Post("Server/Login",this.loginModel).subscribe((res)=>{
        if(res==true){
          this.NotAuth=false;
          this.genericService.getByID("Server/GetServerById",this.loginModel.id).subscribe((resp)=>{
            if(resp){
                localStorage.setItem('UserName',resp.name);
                this.flagsService.username.next(resp.name)  ;  

                localStorage.setItem('serverId',String(this.loginModel.id));
                localStorage.setItem('roleId',String(resp.roleId));
                localStorage.setItem('classId',String(resp.classId));
                localStorage.setItem('gender',String(resp.gender));
                localStorage.setItem('photo',String(resp.photoPath));

                
                this.flagsService.gender.next(resp.gender)  ;  
                this.flagsService.photo.next(resp.photoPath)  ;  
                this.flagsService.serverId.next(String(this.loginModel.id));  
                this.flagsService.roleId.next(resp.roleId)  ;  
                this.flagsService.classId.next(resp.classId)  ;  
              if(resp.roleId==2&&resp.classId!=1){
               
                this.router.navigate(['/myClass']);
              }
              if(resp.roleId==2&&resp.classId==1){
               
                this.router.navigate(['/generalServer']);
              }
              if(resp.roleId==7&&resp.classId==1)        {
                this.router.navigate(['/admin']);
              }
              if(resp.roleId==5&&resp.classId==1)        {
                this.router.navigate(['/subAdmin']);
              }
              if(resp.roleId==4&&resp.classId==1)        {
                this.router.navigate(['/moderator']);
              }
            }
          })
        }
        else{
          this.NotAuth=true;
        }
    })
  }


}
