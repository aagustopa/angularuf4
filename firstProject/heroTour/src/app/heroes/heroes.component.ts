import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';
// import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
  heroes: Hero[] = [];
  // selectedHero?: Hero; comentado desde que usamos rutas

  constructor(private $hero: HeroService) { }

  // para ejecutar cosas al inicio, se carga antes del html
  ngOnInit(): void {
    this.getHeroes();
  }

  // comentado desde que usamos rutas
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  getHeroes(): void {
    this.heroes = this.$hero.getHeroes();
  }

}
