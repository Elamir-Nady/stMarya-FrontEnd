import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FlagsService } from 'src/app/Services/flags.service';

@Injectable({
  providedIn: 'root'
})
export class GeneralClassGuard implements CanActivate {
  constructor(private flagsService :FlagsService,private router:Router){}
  role!:string;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   this.role= this.flagsService.getCLass();
   if(this.role=='1')
      return true;
  else 
    return false;
  }
  
}
