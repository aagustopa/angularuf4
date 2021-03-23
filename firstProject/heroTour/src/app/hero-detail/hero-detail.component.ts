import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // @Input() hero?: Hero;
  hero?: Hero;

  constructor(
    private route: ActivatedRoute, //para coger informacion en que ruta está
    private hero$: HeroService, //para hacer peticion
    private location: Location //para ir hacia atras, el boton de "back"
  ) { }

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.hero = this.hero$.getHeroe(id);
  }
  goBack(): void {
    this.location.back();
  }

}
