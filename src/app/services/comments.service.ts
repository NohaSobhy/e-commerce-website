import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {

    private jsonUrl = 'assets/comments.json';
  
    constructor(private http: HttpClient) {}
  
    getComments(): Observable<any> {
      return this.http.get<any>(this.jsonUrl);
    }
  
}
