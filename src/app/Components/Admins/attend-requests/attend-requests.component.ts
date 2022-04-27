import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlagsService } from 'src/app/Services/flags.service';
import { GenericService } from 'src/app/Services/generic.service';
import { IAttendance } from 'src/app/ViewModels/IAttendance';

@Component({
  selector: 'app-attend-requests',
  templateUrl: './attend-requests.component.html',
  styleUrls: ['./attend-requests.component.scss']
})
export class AttendRequestsComponent implements OnInit {
requests:IAttendance[]=[];
constructor(private flagsService:FlagsService,private genericService:GenericService,private router:Router) { 
 
}

  ngOnInit(): void {
    this.genericService.get('ServersAttendances/RequestAllToApprove').subscribe((res)=>{
      this.requests=res;
    })
  }
  accept(id:number){
    this.genericService.getByID('ServersAttendances/ApproveAttend',id).subscribe((res)=>{
      if(res=='Success'){
        alert('تم القبول');
        this.ngOnInit();
      }
    },(error)=>{
      if(error.status==200){
        if(error.error.text=='Success'){
          alert('تم القبول');
          this.ngOnInit();
        }
      }
    })
  }

  reject(id:number){

    this.genericService.getByID('ServersAttendances/removeRequest',id).subscribe((res)=>{
      if(res=='Success'){
        alert('تم الحذف');
        this.ngOnInit();
      }
    },(error)=>{
      if(error.status==200){
        if(error.error.text=='Success'){
          alert('تم الحذف');
          this.ngOnInit();
        }
      }
    })
    
  }
}
