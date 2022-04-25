import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iphoto } from '../ViewModels/iphoto';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor(private http:HttpClient) { }


  get(midpoint:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.get<any>(`${environment.baseUrl}${midpoint}`,httpOptions);
   }

   getByID(midpoint:string,id:number):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.get<any>(`${environment.baseUrl}${midpoint}/${id}`,httpOptions);
   }

   Post(midpoint:string,object:any):Observable<any>{
    //  alert(JSON.stringify(object))
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.post<any>(`${environment.baseUrl}${midpoint}`,JSON.stringify(object),httpOptions);
   }

   Put(midpoint:string,object:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.put<any>(`${environment.baseUrl}${midpoint}`,JSON.stringify(object),httpOptions);
   }

   Delete(midpoint:string,id:number):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.delete<any>(`${environment.baseUrl}${midpoint}/${id}`);
   }


   uploadPhoto(photoModel:Iphoto,midpoint:string):Observable<string>{
    const formData: FormData = new FormData();
    if(photoModel.photo){
      formData.append('OwnerId',JSON.stringify(photoModel.ownerId));
      formData.append('Photo', photoModel.photo);
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'enctype': 'multipart/form-data',
        'Accept': 'application/json',
      })
    }
    return this.http.put<string>(`${environment.baseUrl}${midpoint}`,formData,httpOptions);
   }
}
