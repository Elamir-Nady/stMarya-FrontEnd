import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlagsService } from 'src/app/Services/flags.service';
import { GenericService } from 'src/app/Services/generic.service';
import { IChild } from 'src/app/ViewModels/ichild';
import { IClass } from 'src/app/ViewModels/iclass';

@Component({
  selector: 'app-server-home',
  templateUrl: './server-home.component.html',
  styleUrls: ['./server-home.component.scss']
})
export class ServerHomeComponent implements OnInit {
  classId:number=0;
  myClass:IChild[]=[];
  constructor(private flagsService:FlagsService,private genericService:GenericService,private router:Router) { 

    this.flagsService.roleId.next(String(localStorage.getItem('roleId')));
    this.flagsService.classId.subscribe((res)=>{
      this.classId=res as unknown as number;
      if(this.classId>0){
        this.genericService.getByID('Child/GetChildByClassID',this.classId).subscribe((resp)=>{
          this.myClass=resp;
        })
      }
    })

  }

  ngOnInit(): void {
  }
  edit(itemId:number){
    localStorage.setItem('childId',String(itemId));
    this.flagsService.childId.next(String(itemId));
    this.router.navigate(['/editChild']);
  }
}
