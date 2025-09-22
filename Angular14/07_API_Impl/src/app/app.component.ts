import { Component } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '07_API_Impl';
  posts: any;


  constructor(private post: PostService) { }

  ngOnInit(): void {
    this.post.getPosts().subscribe(response => {
      this.posts = response;
      console.log(this.posts);
      
    });
  }
}
