import { Injectable } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../models/hero';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http:HttpClient
  ) { }

  // getHeores():import("../hero").Hero[]
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  getHeroe(id: number): Hero {
    return HEROES.find((el) => el.id === id);
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

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  getExempleUsers(){
    return this.http.get('https://reqres.in/api/users');
  }
}
