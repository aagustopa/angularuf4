import { Component } from '@angular/core';
import { HeroService } from './heroes/services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  constructor(private myService: HeroService) {

  }

  async showUsers(): Promise<void> {
    console.log('hola');
    // console.log(await this.myService.getUsers());
  }
}
