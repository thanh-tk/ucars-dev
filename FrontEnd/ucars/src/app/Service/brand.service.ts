import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}

const API_URL = 'brands/';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(
    private _api: ApiService,
  ) { }

  getBrands(){
    return this._api.getTypeRequest(API_URL);
  }
}
