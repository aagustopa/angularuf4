import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../../models/Photo';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  public photos: Photo[];

  @Input()
  set albumIdFromParent(id: number) {
    this.album$.getPhotoList(id).subscribe(photos => {
      this.photos = photos;
    })
  }

  constructor(private album$: AlbumService) { }

  ngOnInit(): void {
  }

}
