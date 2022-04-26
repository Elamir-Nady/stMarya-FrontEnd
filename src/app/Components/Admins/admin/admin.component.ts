import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from 'express';
import { FlagsService } from 'src/app/Services/flags.service';
import { GenericService } from 'src/app/Services/generic.service';
import { Iphoto } from 'src/app/ViewModels/iphoto';
import { IServer } from 'src/app/ViewModels/iserver';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  photofrm!: FormGroup;
  serverfrm!: FormGroup;
  file!:File;
  server!:IServer;
fileNull:boolean=false;
fileNotMatch:boolean=false;
check:boolean=false;

  constructor(private genericService:GenericService,private formBuilder:FormBuilder) { 
      this.photofrm = this.formBuilder.group({
        id: [Validators.required],
        name: ['',Validators.required],
        file: [,Validators.required],
  
      });

      this.serverfrm = this.formBuilder.group({
        sid: [Validators.required],
        sname: ['',Validators.required],
        gender: ['m',Validators.required],

  
      });
    
    }

  ngOnInit(): void {
  }
checkServer(id:any){

  id= id as number;
if(id>0){
this.genericService.getByID("server/GetserverById",id).subscribe((resp)=>{
this.server=resp;
this.photofrm.controls['name'].setValue(resp.name);


})
}
}

checkServerfound(id:any){
  this.serverfrm.controls['sname'].setValue('');
  this.check=false;

  id= id as number;
this.genericService.getByID("server/GetserverById",id).subscribe((resp)=>{
this.server=resp;
this.serverfrm.controls['sname'].setValue(resp.name);
if(resp.id>0){
  this.check=true;
}


})

}

getFile(event: any) {
   
  this.file = event.target.files[0];
  if (this.file){
    this.fileNull = false;
    this.fileNotMatch = false;
  }
  else{
    this.fileNull = true;
    this.fileNotMatch = true;
  }
}
submit(){
if(this.file){
let photoModel:Iphoto={
  ownerId:this.server.id,
  photo:this.file 
}
this.genericService.uploadPhoto(photoModel,"server/UploadePhoto").subscribe(res=>{
  if(res){
    alert('تم تغيير الصورة بنجاح');

    this.photofrm.reset();
  }
})

}
}

AddServer(){
  let id=this.serverfrm.get('sid')?.value;
  let name=this.serverfrm.get('sname')?.value;
  let gender=this.serverfrm.get('gender')?.value;
  let server:IServer={
    id:id,
    name:name,
    classId:2,
    roleId:2,
    photoPath:'',
    isActive:true,
    password:"123456",
    phone:'010',
    gender:gender,


  }
  
  this.genericService.Post("server/addserver",server).subscribe(res=>{
    if(res){
      alert('تم الإضافة بنجاح');
  
      this.serverfrm.reset();
    }
  },(error)=>{
    if(error.status==200){
      alert('تم الإضافة بنجاح');
  
      this.serverfrm.reset();
    }
  })
}
}
