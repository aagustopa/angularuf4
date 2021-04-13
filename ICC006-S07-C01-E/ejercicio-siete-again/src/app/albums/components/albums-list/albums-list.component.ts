import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Album } from '../../models/Album';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {
  // public album: Album;
  public albums: Album[];
  @Output() myEvent = new EventEmitter();

  constructor(private album$: AlbumService) { }

  ngOnInit(): void {
    try {
      this.album$.getAlbumList().subscribe(albums => {
        this.albums = albums;
        console.log(this.albums);
      });
    } catch (e) {
      console.log(e);
    }
    // this.getAlbums();
  }
  sendToParent(albumId:number):void{
    this.myEvent.emit(albumId);
  }
  // async getAlbums() {
  //   const response = await this.$album.getAlbums();
  //   console.log(response);
  //   console.log('hola');
  // }

}
