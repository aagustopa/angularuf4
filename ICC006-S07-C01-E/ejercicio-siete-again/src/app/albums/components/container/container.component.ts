import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  public albumId:number;

  constructor() { }

  ngOnInit(): void {
  }

  receive(albumId:number):void{
    this.albumId=albumId;
    console.log(this.albumId);
  }

}
