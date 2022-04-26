import { Component, OnInit } from '@angular/core';
import { FlagsService } from 'src/app/Services/flags.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
img:string='';
  constructor(private flagsService:FlagsService) {

    this.flagsService.childId.subscribe(res=>{
      this.img=res;
    })
   }

  ngOnInit(): void {
  }

}
