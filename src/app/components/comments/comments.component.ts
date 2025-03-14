import { Component , Input } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { Comment } from '../../models/comment.model';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {

    comments: Comment[] = [];


  
    constructor(private _commentsService: CommentsService) {}
  
    ngOnInit(): void {
      this._commentsService.getComments().subscribe({
        next:(res) => {
          this.comments = res;
          console.log(res);
        }
      })
        
    }
    
  




}
