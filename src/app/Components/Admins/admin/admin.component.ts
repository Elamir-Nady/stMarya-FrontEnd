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
  file!:File;
  server!:IServer;
fileNull:boolean=false;
fileNotMatch:boolean=false;

  constructor(private genericService:GenericService,private formBuilder:FormBuilder) { 
      this.photofrm = this.formBuilder.group({
        id: [Validators.required],
        name: ['',Validators.required],
        file: [,Validators.required],
  
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
}
