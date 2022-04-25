import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlagsService {
  username:BehaviorSubject<string>;
  roleId:BehaviorSubject<string>;
  classId:BehaviorSubject<string>;
  childId:BehaviorSubject<string>;
  serverId:BehaviorSubject<string>;
  gender:BehaviorSubject<string>;
  photo:BehaviorSubject<string>;


  constructor(private router:Router) { 
    this.username=new BehaviorSubject<string>(String(localStorage.getItem('UserName')));
    this.serverId=new BehaviorSubject<string>(String(localStorage.getItem('serverId')));
    this.roleId=new BehaviorSubject<string>(String(localStorage.getItem('roleId')));
    this.classId=new BehaviorSubject<string>(String(localStorage.getItem('classId')));
    this.childId=new BehaviorSubject<string>(String(localStorage.getItem('childId')));
    this.gender=new BehaviorSubject<string>(String(localStorage.getItem('gender')));
    this.photo=new BehaviorSubject<string>(String(localStorage.getItem('photo')));

  }

  logout(){
    localStorage.clear();
    this.username.next('')  ;  
    this.roleId.next('')  ;  
    this.classId.next('')  ;  
    this.childId.next('')  ;  
    this.serverId.next('')  ;  
    this.gender.next('null')  ;  
    this.photo.next('null')  ;  
    this.router.navigate(['/login']);
  
  }


  getRole():string{
    let role='';

    this.roleId.subscribe(res=>{
      role=res;
    }
    )
    return role;
  }
}
