import { Component, OnInit } from '@angular/core';
import { vehicle } from 'src/app/Models/Vehicle.model';
import { CarService } from 'src/app/Service/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  vehicleList: vehicle[] = [];
  fillterVehicleList: vehicle[] = [];
  currentSelect: string = '';
  sortList: Array<string> = ['All', 'New Car ( Authorised Dealer)', 'New Car ( Parallel Importer )', 'Used Cars'];
  constructor(
    private _service: CarService,
  ) { }

  ngOnInit(): void {
    this.currentSelect = this.sortList[0];
    this._service.getVehicles()
      .subscribe(data => {
        this.vehicleList = (data as vehicle[]);

        this.fillterVehicleList= data as vehicle[];
      });
  }

  filterItem(value: string){
    let copyList = [...this.vehicleList]
    if(!value) {
      this.fillterVehicleList = copyList
    } else {
      this.fillterVehicleList = copyList.filter(item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }
  }

  handleSort(item: string): void {
    let copyList = [...this.vehicleList]

    this.currentSelect = item;
    if(item === 'All'){
      this.fillterVehicleList = this.vehicleList;
      return 
    }
    this.fillterVehicleList =  copyList.filter(vehicle => vehicle.vehicle_cond === this.sortList.indexOf(item));
  }

}
