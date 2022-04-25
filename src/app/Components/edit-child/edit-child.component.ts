import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlagsService } from 'src/app/Services/flags.service';
import { GenericService } from 'src/app/Services/generic.service';
import { IChild } from 'src/app/ViewModels/ichild';
import { Iphoto } from 'src/app/ViewModels/iphoto';

@Component({
  selector: 'app-edit-child',
  templateUrl: './edit-child.component.html',
  styleUrls: ['./edit-child.component.scss']
})
export class EditChildComponent implements OnInit {
child!:IChild;
childForm!: FormGroup;
file!:File;
fileNull:boolean=false;
fileNotMatch:boolean=false;
 date = new Date;



  constructor(private flagsService:FlagsService,private genericService:GenericService,
              private formBuilder:FormBuilder,private router:Router) { 
    this.flagsService.childId.subscribe((res)=>{
      let id =res as unknown as number;
      if(id>0){
        this.genericService.getByID("Child/GetChildById",id).subscribe((resp)=>{
          this.child=resp;
          this.childForm.controls['id'].setValue(this.child.id);
          this.childForm.controls['name'].setValue(this.child.name);
          this.childForm.controls['biryhday'].setValue(this.child.birthday);

        })
      }
    })

    this.childForm = this.formBuilder.group({
      id: [Validators.required],
      name: ['',Validators.required],
      birthday: [,Validators.required],
      file: [,Validators.required],

    });

  }

  ngOnInit(): void {

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
  let name=this.childForm.get('name')?.value;
  let birthday=this.childForm.get('birthday')?.value;
  let photoModel:Iphoto={
    ownerId:this.child.id,
    photo:this.file 
  }
  this.genericService.uploadPhoto(photoModel,"Child/UploadePhoto").subscribe(res=>{
    if(res){
      if(this.child.name!=name||this.child.birthday!=birthday){
        this.child.name=name;
        this.child.birthday=birthday;
        this.genericService.Put('Child/UpdateChild',this.child).subscribe((resp)=>{
          if(resp){
            this.router.navigate(['/myClass']);
          }
        },(error)=>{
          if(error.status==200){
            this.router.navigate(['/myClass']);
      
          }
        })
      }


    }
  })

}
}

}
