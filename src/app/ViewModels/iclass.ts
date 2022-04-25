import { IChild } from "./ichild";
import { IServer } from "./iserver";

export interface IClass {
     id:number  ,
     name:string  ,
     location :string ,
     children :IChild[]  ,
     servers:IServer[] ,
     isActive :boolean;
}
