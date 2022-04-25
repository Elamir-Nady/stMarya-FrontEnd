import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlagsService } from 'src/app/Services/flags.service';
import { GenericService } from 'src/app/Services/generic.service';
import { IchangePassword } from 'src/app/ViewModels/ichange-password';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordFrm!: FormGroup;
  roleId:number=0;
  oldError:boolean=false;
  constructor(private formBuilder:FormBuilder,private flagsService:FlagsService,
              private genericService:GenericService,private router:Router) { 

    this.changePasswordFrm = this.formBuilder.group({
      oldPass: ['',Validators.required],
      newPass: ['',Validators.required],
      rnewPass: ['',Validators.required],

    });
    this.flagsService.roleId.subscribe((res)=>{
      if(res){
        this.roleId=res as unknown as number;
      }

    });

  }

  ngOnInit(): void {
  }

  change(){
    let oldPass=this.changePasswordFrm.get('oldPass')?.value;
    let newPass=this.changePasswordFrm.get('newPass')?.value;
    this.flagsService.serverId.subscribe((res)=>{
      let id=res as unknown as number;

      if(id>0){
        this.oldError=false;

        let changePasswordModel:IchangePassword={
          id:id,
          oldPassword:oldPass,
          newPassword:newPass,
        }

        this.genericService.Post('Server/ChangePassword',changePasswordModel).subscribe((resp)=>{
          if(resp==true){
            alert('تم تغيير كلمة السرح بنجاح ');
            if(this.roleId==2){
              this.router.navigate(['/myClass']);

            }
          }
          else if(resp==false){
            this.oldError=true;
          }

        })
      }
    })
   
  }

}
