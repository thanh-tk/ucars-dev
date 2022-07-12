import { Component, OnInit } from '@angular/core';
import { brand } from 'src/app/Models/Brand.model';
import { BrandService } from 'src/app/Service/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {
  sortList: Array<string> = ['All', 'Last Updated', 'Created'];
  brandList: brand[] = [];
  currentSelect: string = '';
  constructor(
    private _service: BrandService
  ) { }

  ngOnInit(): void {
    this.currentSelect = this.sortList[0];

    this._service.getBrands()
      .subscribe(data => {
        // const reData = Object.keys(data).map(key: => ({type: key, value: data[key]}));
        this.brandList = data as brand[];
        this.brandList= this.brandList.concat(this.brandList, this.brandList, this.brandList)
        console.log("🚀 ~ file: brand-list.component.ts ~ line 24 ~ BrandListComponent ~ ngOnInit ~ data", data)
      });
  }

  _OnItemClick(item: string): void {
    this.currentSelect = item;
  }
}
