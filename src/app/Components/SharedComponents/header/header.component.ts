import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlagsService } from 'src/app/Services/flags.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  imgUrl= environment.imag;
  roleId:string='';
  serverName!:string;
  gender!:string;
  img!:string;
  userid:any;
  classRole:boolean=false;
  constructor(private flagsService:FlagsService,
              private router:Router) {
    this.flagsService.roleId.subscribe((res)=>{
      if(res){ this.roleId=res }})

    this.flagsService.username.subscribe((res)=>{
      if(res){this.serverName=res;} })

    this.flagsService.gender.subscribe((res)=>{
      if(res){this.gender=res;} })

    this.flagsService.photo.subscribe((res)=>{
      if(res){this.img=res;
      } })
      this.flagsService.serverId.subscribe((res)=>{
        if(res){this.userid=res as unknown as number;
        } })

       let classid= this.flagsService.getCLass();
       if(classid=='1'){
        this.classRole=true;
       }


   }
   
   

  ngOnInit(): void {

  }
  edit(){
    localStorage.setItem('childId',String(this.userid));
    this.flagsService.childId.next(String(this.userid));
    this.router.navigate(['/editServer']);
  }
prvphoto(){
  localStorage.setItem('childId',String(this.imgUrl+'/'+this.img));
  this.flagsService.childId.next(String(this.imgUrl+'/'+this.img));
  this.router.navigate(['/photo']);
}
  logout(){
    this.flagsService.logout();
    this.router.navigate(['/login']);
  }
}
