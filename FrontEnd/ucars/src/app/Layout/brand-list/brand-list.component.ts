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
  brandList: any;
  currentSelect: string = '';
  constructor(
    private _service: BrandService
  ) { }

  ngOnInit(): void {
    this.currentSelect = this.sortList[0];

    this._service.getBrands()
      .subscribe(data => {
        this.brandList = data;
        console.log("🚀 ~ file: brand-list.component.ts ~ line 24 ~ BrandListComponent ~ ngOnInit ~ data", data)
      });
  }

  _OnItemClick(item: string): void {
    this.currentSelect = item;
  }
}
