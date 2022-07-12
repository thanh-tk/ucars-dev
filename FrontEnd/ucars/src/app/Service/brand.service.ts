import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { brand } from '../Models/Brand.model';
import { ApiService } from './api.service';

const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}

const API_URL = 'brands/';
const API_URL_CREATE_BRAND = 'brand/';


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

  /** POST: add a new hero to the database */
  createBrand(brand: brand) {
    return this._api.postTypeRequest(API_URL_CREATE_BRAND, brand).subscribe((res: any) => {
      if(res.access_token){

      }
    }
       
      );
  }
}
