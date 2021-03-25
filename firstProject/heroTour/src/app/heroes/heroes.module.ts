import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HeroesRoutingModule } from './heroes-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


@NgModule({
  declarations: [
    DashboardComponent,
    HeroesListComponent,
    HeroDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
