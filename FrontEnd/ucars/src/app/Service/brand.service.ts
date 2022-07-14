import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { brand } from '../Models/Brand.model';
import { ApiService } from './api.service';

const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}

const API_URL = 'brand/brands/';
const API_URL_CREATE_BRAND = 'brand/create-brand/';
const API_URL_UPDATE_BRAND = 'brand/update-brand/';
const API_URL_DELETE_BRAND = 'brand/delete-brand/';
const API_URL_GET_BRAND = 'brand/brand/';


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
  getBrand(id: number){
    return this._api.getBrandInfoRequest(API_URL_GET_BRAND, id);
  }

  /** POST: add a new brand to the database */
  createBrand(brand: brand) {
    return this._api.postTypeRequest(API_URL_CREATE_BRAND, brand).subscribe((res: any) => {
      return res
    });
  }
  /** POST: update a  brand to the database */
  updateBrand(brand: brand) {
    return this._api.postTypeRequest(API_URL_UPDATE_BRAND, brand).subscribe((res: any) => {
      return res
    });
  }
  deleteBrand(id: number) {
    return this._api.deleteBrandRequest(API_URL_DELETE_BRAND, id).subscribe((res: any) => {
      return res
    });
  }
}
