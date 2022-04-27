import { Component, OnInit } from '@angular/core';
import { FlagsService } from 'src/app/Services/flags.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
img:string='';
url:string=environment.imag;
gender:string=''
  constructor(private flagsService:FlagsService) {

    this.flagsService.photo.subscribe(res=>{
  
      if(res!='null'){
        this.img=res;

      }    
    })
   }

  ngOnInit(): void {
   
  }

}
