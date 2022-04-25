import { Component } from '@angular/core';
import { FlagsService } from './Services/flags.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stMarya-FrontEnd';

  LoginStatus:boolean=false;
  constructor(private flagsService:FlagsService) {
    this.flagsService.roleId.subscribe((res)=>{
      if(res!=''){
        this.LoginStatus=true;

      }
      else{
        this.LoginStatus=false;

      }
    })
  
   
   }
}
