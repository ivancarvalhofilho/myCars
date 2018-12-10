import { Injectable } from '@angular/core';

@Injectable()
export class Session {
    
   id: string;
   userName: string;
 
   setUserName(userName) {
       this.userName = userName;       
   }
   setId(id :string){
       this.id = id;
   }
   get getUserName() {
       return this.userName;
   }  
   get getId() {
    return this.id;
}
}