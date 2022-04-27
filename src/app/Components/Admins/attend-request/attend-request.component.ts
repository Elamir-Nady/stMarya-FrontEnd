import { Component, OnInit } from '@angular/core';
import { FlagsService } from 'src/app/Services/flags.service';
import { GenericService } from 'src/app/Services/generic.service';
import { IServer } from 'src/app/ViewModels/iserver';

@Component({
  selector: 'app-attend-request',
  templateUrl: './attend-request.component.html',
  styleUrls: ['./attend-request.component.scss']
})
export class AttendRequestComponent implements OnInit {

  myDate = new Date();
  server!:IServer;
  serverid:number=0;
  notAttend:boolean=true;
  alert:boolean=false;
  Accept:boolean=false;
  Waiting:boolean=false;

  constructor(private genericService:GenericService,private flagsService:FlagsService){
    this.flagsService.serverId.subscribe(res=>{
      this.serverid=res as unknown as number;
      if(this.serverid>0){
        this.genericService.getByID('server/getserverbyId',this.serverid).subscribe((resp)=>{
          this.server=resp;
        this.genericService.getByID('ServersAttendances/checkAttend',this.serverid).subscribe((respon)=>{
          switch(respon){
            case'Accept':
            this.Accept=true;
            break;
            case'Waiting':
            this.Accept=false;
            this.Waiting=true;
            break;
            
            case'NotAttend':
            this.Accept=false;
            this.Waiting=false;
            break;

          }
        },(error)=>{
          if(error.status==200){
            // alert(JSON.stringify(error.error.text))
            switch(error.error.text){
              case'Accept':
              this.Accept=true;
              break;
              case'Waiting':
              this.Accept=false;
              this.Waiting=true;
              break;
              
              case'NotAttend':
              this.Accept=false;
              this.Waiting=false;
              break;
  
            }
          }
        })
      })

      }

    })
  }

  ngOnInit(): void {
  }
attend(){
  this.genericService.getByID('ServersAttendances/RequestAttend',this.server.id).subscribe((res)=>{
    if(res='Success'){
      this.alert=true;

    }
    else{
      this.alert=false;
      this.notAttend=false;


    }
  },(error)=>{
    if(error.status==200){
      if(error='Success'){
        this.alert=true;
  
      }
      
    }else{
      this.alert=false;
      this.notAttend=false;


    }
  })
}
}
