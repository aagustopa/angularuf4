import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  async getUsers(): Promise<any> {
    try {
      const response = await fetch('https://reqres.in/api/users?page=2');
      const json = await response.json();
      return json;
    } catch (err) {
      console.error(err);
    }
  }
}
