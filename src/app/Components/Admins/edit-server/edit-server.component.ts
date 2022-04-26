import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlagsService } from 'src/app/Services/flags.service';
import { GenericService } from 'src/app/Services/generic.service';
import { IClass } from 'src/app/ViewModels/iclass';
import { IServer } from 'src/app/ViewModels/iserver';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.scss']
})
export class EditServerComponent implements OnInit {

  server!: IServer;
  serverForm!: FormGroup;
  file!: File;
  fileNull: boolean = false;
  fileNotMatch: boolean = false;
  date = new Date;
  classes:IClass[]=[];



  constructor(private flagsService: FlagsService, private genericService: GenericService,
    private formBuilder: FormBuilder, private router: Router) {
    this.flagsService.childId.subscribe((res) => {
      let id = res as unknown as number;
      if (id > 0) {
        this.genericService.getByID("Server/GetServerById", id).subscribe((resp) => {
          this.server = resp;
          this.genericService.get('Class/GetClasses').subscribe((classes)=>{
            this.classes=classes;

          })
          this.serverForm.controls['id'].setValue(this.server.id);
          this.serverForm.controls['name'].setValue(this.server.name);
          this.serverForm.controls['phone'].setValue(this.server.phone);
          this.serverForm.controls['class'].setValue(this.server.classId);
          // alert(JSON.stringify(this.server.classId))

          this.serverForm.controls['biryhday'].setValue(this.server.birthday);


        })

      }
    })
 
    this.serverForm = this.formBuilder.group({
      id: [Validators.required],
      name: ['', Validators.required],
      class: ['0', Validators.required],
      phone: [, Validators.required],
      birthday: [, Validators.required],
   

    });

  }

  ngOnInit(): void {

  }

 
  submit() {
      let name = this.serverForm.get('name')?.value;
      let birthday = this.serverForm.get('birthday')?.value;
      let phone = this.serverForm.get('phone')?.value;
      var classs = this.serverForm.get('class')?.value;
      classs =classs as number;
      if (this.server.name != name || this.server.birthday != birthday|| this.server.classId != classs|| this.server.phone != phone) {
        this.server.name = name;
        this.server.phone = phone;
        this.server.classId = classs;
        this.server.birthday = birthday;
        this.genericService.Put('Server/UpdateServer', this.server).subscribe((resp) => {
          if (resp) {
            alert('تم تعديل البيانات بنجاح');
            this.router.navigate(['/servers']);
          }
        }, (error) => {
          if (error.status == 200) {
            alert('تم تعديل البيانات بنجاح');
            this.router.navigate(['/servers']);

          }
        })


      }
    }
  }



