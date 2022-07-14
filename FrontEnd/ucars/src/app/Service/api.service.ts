import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private REST_API_SERVER = 'http://localhost:8000/api/v1/';

  constructor(private httpClient: HttpClient) { }

  getTypeRequest(url: string) {
    return this.httpClient.get(this.REST_API_SERVER + url).pipe(map(res => { return res}));
  }
  getBrandInfoRequest(url: string, id: number) {
    return this.httpClient.get(this.REST_API_SERVER + url + id).pipe(map(res => { return res}));
  }
  deleteBrandRequest(url: string, id: number) {
    return this.httpClient.post(this.REST_API_SERVER + url + id, undefined).pipe(map(res => { return res}));
  }
  postTypeRequest(url: string, payload: any) {
    return this.httpClient.post(this.REST_API_SERVER + url, payload).pipe(map(res => { return res}));
  }
  putTypeRequest(url: string, payload: any) {
    return this.httpClient.put(this.REST_API_SERVER + url, payload).pipe(map(res => {
      return res;
    }))
  }  


}
