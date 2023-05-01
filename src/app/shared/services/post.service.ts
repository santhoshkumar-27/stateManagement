import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient,
  ) { }

  getPostList(): Observable<any> {
    return this.http.get('http://localhost:3000/postLists')
  }
  getPostById(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/postLists').pipe(
      map((res: any) => {
        return res.filter((list: any) => list.id == id)
      })
    )
  }
}
