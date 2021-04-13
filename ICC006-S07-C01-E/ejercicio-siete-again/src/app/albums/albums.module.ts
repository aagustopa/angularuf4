import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { ContainerComponent } from './components/container/container.component';


@NgModule({
  declarations: [
    ContainerComponent,
    PhotosListComponent,
    AlbumsListComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule
  ],
  exports:[
    ContainerComponent
  ]
})
export class AlbumsModule { }
