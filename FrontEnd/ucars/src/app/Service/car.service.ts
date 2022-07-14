import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

const API_URL = 'vehicle/vehicles/';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(
    private _api: ApiService,
  ) { }

  getVehicles(){
    return this._api.getTypeRequest(API_URL);
  }
}
