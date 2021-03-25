import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';
// import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

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
    this.getExemple();
  }

  // comentado desde que usamos rutas
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  getHeroes(): void {
    // this.heroes = this.$hero.getHeroes();
    this.$hero.getHeroes().subscribe((heroes) => this.heroes = heroes);
  }

  getExemple() {
    this.$hero.getExempleUsers().subscribe((data) => {
      console.log(data);
    })
  }

}
