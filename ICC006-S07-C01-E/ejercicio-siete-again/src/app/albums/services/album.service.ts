import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Album } from '../models/Album';
import { catchError } from 'rxjs/operators';
import { Photo} from '../models/Photo';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  public getAlbumList(): Observable<Album[]> {
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums')
      .pipe(
        catchError(err => throwError(err))
      );
  }

  public getPhotoList(id:number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
      .pipe(
        catchError(err => throwError(err))
      );
  }

   // try {
    //   const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    //   const json = await response.json();
    //   return json;
    // } catch (err) {
    //   console.error(err);
    // }
}
