import { Injectable } from '@angular/core';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  async update(user:User):Promise <any>{
    const response = await fetch('https://reqres.in/api/users/2',{
      method:'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(user)
    });
    if(response.status!==200){
      return false;
    }
    return await response.json();
  }
}
