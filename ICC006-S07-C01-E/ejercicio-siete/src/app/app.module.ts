import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsListComponent } from './albums/components/albums-list/albums-list.component';
import { PhotosListComponent } from './albums/components/photos-list/photos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsListComponent,
    PhotosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
