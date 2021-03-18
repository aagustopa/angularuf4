import { Injectable } from '@angular/core';
import { HEROES } from '../mock-heroes';
import {Hero} from '../hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // getHeores():import("../hero").Hero[]
  getHeroes(): Hero[] {
    return HEROES;
  }

  // async getUsers(): Promise<any> {
  //   try {
  //     const response = await fetch('https://reqres.in/api/users?page=1');
  //     const json = await response.json();
  //     return json;
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
}
