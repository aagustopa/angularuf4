import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  public posts: Post[];
  public post : Post;

  constructor(private post$: PostService) { }

  ngOnInit(): void {
    try {
      this.post$.getPostsList().subscribe(posts => {
        this.posts = posts;
        console.log(this.posts);
      });
    } catch (e) {
      console.log(e);
    }
  }
  
  public async submitDelete(id){
    console.log('boton clickado', id);
    try{
      const res = await this.post$.deletePost(this.post);
      if(res){
        console.log(res);
        alert('Post eliminado!');
      }else{
        console.error('ERROR');
      }
    }catch(err){
      console.error(err);
      alert('ERROR');
    }
  }

}
