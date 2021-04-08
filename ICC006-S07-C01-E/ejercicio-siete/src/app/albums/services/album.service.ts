import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor() { }

  async getAlbums(): Promise<any> {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums');
      const json = await response.json();
      return json;
    } catch (err) {
      console.error(err);
    }
  }
}
