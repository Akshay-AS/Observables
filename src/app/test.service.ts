import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISub } from './isub';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }
  private url="https://jsonplaceholder.typicode.com/posts";

  getData():Observable<ISub[]>{
    return this.http.get<ISub[]>(this.url)
  }

  setData(data:ISub):Observable<ISub[]>{
    return this.http.post<ISub[]>(this.url,data)
  }
}
