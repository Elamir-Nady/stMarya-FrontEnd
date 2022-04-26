import { IChild } from "./ichild"
import { IAttendance } from "./IAttendance"
import { IClass } from "./iclass"
import { IRole } from "./irole"

export interface IServer {
       id :number ,
       classId :number ,
       roleId :number , 
       name :string ,
       password :string , 
       phone:string  ,
       birthday? :Date ,
       photoPath :string ,
       class?:IClass  ,
       role?:IRole  ,
       isActive :boolean , 
       child?:IChild[]   ,
       childrenAttendances?:IAttendance [] ,
       gender:string

}
