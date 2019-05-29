import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Utils } from '../../utils';
import { Post, PostComments } from '../../discussion.model';

@Injectable()
export class DiscussionService {

  constructor(private http: HttpClient) { }

  /**
   * Load Posts
   */
  loadPosts(): Observable<any> {
    return this.http.get('/api/posts');
  }

  /**
   * Save New Post
   * @param content 
   */
  savePost(content: string): Observable<any> {
    const post: Post = {
      id: Utils.generateGUID(),
      from: {
        name: 'John due',
        username: 'Jdue99'
      },
      noOfLikes: 0,
      noOfComments: 0,
      content: content,
      time: '0 mins'
    };
    return this.http.post('/api/posts/', post);
  }

  /**
   * Load Comments by post id
   * @param postId 
   */
  loadComments(postId): Observable<any> {
    return this.http.get(`/api/post-comments?postId=^${postId}`);
  }

  /**
   * Save comment to a post
   * @param comment 
   */
  saveComment(comment: any): Observable<any> {
    comment.id = Utils.generateGUID();
    return this.http.post('/api/post-comments/', comment);
  }

 
}

