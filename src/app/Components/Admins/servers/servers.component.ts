import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlagsService } from 'src/app/Services/flags.service';
import { GenericService } from 'src/app/Services/generic.service';
import { IServer } from 'src/app/ViewModels/iserver';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  classId:number=0;
  servers:IServer[]=[];
  constructor(private flagsService:FlagsService,private genericService:GenericService,private router:Router) { 

    this.flagsService.roleId.next(String(localStorage.getItem('roleId')));
    this.flagsService.classId.subscribe((res)=>{
      this.classId=res as unknown as number;
      if(this.classId>0){
        this.genericService.get('Server/GetAllServers').subscribe((resp)=>{
          this.servers=resp;
        })
      }
    })

  }

  ngOnInit(): void {
  }
  edit(itemId:number){
    localStorage.setItem('childId',String(itemId));
    this.flagsService.childId.next(String(itemId));
    this.router.navigate(['/editServer']);
  }

}
