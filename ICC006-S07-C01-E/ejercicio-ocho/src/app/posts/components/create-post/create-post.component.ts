import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  public post: Post;

  constructor(private post$: PostService) { }

  ngOnInit(): void {
    this.post = {
      userId: 1,
      id: 1,
      title: '',
      body: '',
    };
  }
  public async submitForm(event){
    event.preventDefault();
    try{
      const res = await this.post$.createPost(this.post);
      if(res){
        console.log(res);
        alert('Usuario creado!');
      }else{
        console.error('ERROR');
      }
    }catch(err){
      console.error(err);
      alert('ERROR');
    }
  }

}
