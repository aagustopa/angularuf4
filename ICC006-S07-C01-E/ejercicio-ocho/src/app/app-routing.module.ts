import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './posts/components/create-post/create-post.component';
import { PostsListComponent } from './posts/components/posts-list/posts-list.component';

const routes: Routes = [
  { path: 'create', component: CreatePostComponent },
  { path: 'list', component: PostsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
