import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/Album';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {
  public album: Album;
  constructor(private $album: AlbumService) { }

  ngOnInit(): void {
    this.getAlbums();
  }
  async getAlbums() {
    const response = await this.$album.getAlbums();
    console.log(response);
    console.log('hola');
  }

}
