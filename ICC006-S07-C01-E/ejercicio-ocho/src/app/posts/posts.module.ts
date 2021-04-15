import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreatePostComponent,
    PostsListComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
