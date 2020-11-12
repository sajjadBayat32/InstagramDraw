import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}

  getComments(is_shuffle): Observable<any> {
    return this.http.post( 'http://192.168.12.172:5000/get-comments',{'shuffle': is_shuffle}, {headers: this.httpHeaders});
  }
}
