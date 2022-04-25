import { IAttendance } from "./IAttendance"
import { IClass } from "./iclass";
import { IRole } from "./irole";
import { IServer } from "./iserver";

export interface IChild {
    id :number ,
    classId :number ,
    roleId :number , 
    name :string ,
    password :string , 
    phone:string  ,
    birthday :Date ,
    photoPath :string ,
    class:IClass  ,
    role:IRole  ,
    isActive :boolean , 
    child:IChild[]   ,
    childrenAttendances:IAttendance [] ,
    ServerId :number ,
    FatherId :number ,
    Server:IServer


}


