import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  async createUser(): Promise<any> {
    try {
      const response = await fetch('https://reqres.in/api/users');
      const json = await response.json();
      return json;
    } catch (err) {
      console.error(err);
    }
  }
}
