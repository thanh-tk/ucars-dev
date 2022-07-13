import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable } from 'rxjs/internal/Observable';
import { Observer } from 'rxjs/internal/types';
import { brand } from 'src/app/Models/Brand.model';

import { BrandService } from 'src/app/Service/brand.service';
import { NzMessageService } from 'ng-zorro-antd/message';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})

export class BrandListComponent implements OnInit {

  @Output() sendDataToParent = new EventEmitter();
  
  sortList: Array<string> = ['All', 'Last Updated', 'Brand Name', 'Number of Models'];
  brandList: brand[] = [];
  fillterBrandList: brand[] = [];
  statusList: Array<string> = ['Inactive', 'Active'];

  currentSelect: string = '';
  createModal: boolean = false;

  loading = false;
  avatarUrl?: string
  previewImage: string | undefined = '';
  previewVisible = false;
  imagePath: string[] = [];
  form!: FormGroup;

  constructor(
    private _service: BrandService,
    private message: NzMessageService,
    public _fb : FormBuilder,
  ) { }

  ngOnInit(): void {
    this.currentSelect = this.sortList[0];
    this.form = this._fb.group({
      name: '',
      description: '',
      logo: '',
      status: '',
    });
    this._service.getBrands()
      .subscribe(data => {
        this.brandList = (data as brand[]);//.map((item) => {return {...item, logo: this._sanitizer.bypassSecurityTrustResourceUrl(item.logo).toString()}});

        this.fillterBrandList= data as brand[];
      });
  }

  handleSort(item: string): void {
    this.currentSelect = item;
    this.fillterBrandList = this.sortingList(item)
  }

  _AddBrand(){
    this.createModal = true;
  }

  handleCancel(){
    this.createModal = false;
  }

  handleOk(){
    let b = this.form?.value;
    this.createModal = false;
  }

  handleView(){
   
  }

  handleSubmit(){
    let b = {...this.form?.value, logo: this.avatarUrl};

    this._service.createBrand(b);
    this.message.error('Brand Create Successfully!', {
      nzDuration: 10000
    });
  }

  filterItem(value: string){
    let copyList = [...this.brandList]
    if(!value) {
      this.fillterBrandList = copyList
    } else {
      this.fillterBrandList = copyList.filter(item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }
  }

  //HELPER FUNCTIONS *----------------------------------------------------------------
  sortingList(value: string){
    
    let inData = [...this.fillterBrandList]
    switch (value) {
      case 'All':
        return this.brandList
      case 'Last Updated':
        return inData.sort((a, b) => (a.last_update) < (new Date(b.last_update)) ? 1 : -1 )
      case 'Brand Name':
        return inData.sort((a, b) => a.name.localeCompare(b.name) ? 1 : -1)
      case 'Number of Models':
        return inData.sort((a, b) => a.models.length < b.models.length ? 1 : -1 ) 
      default:
        return this.brandList
    }
  }
  beforeUpload = (file: NzUploadFile, _fileList: NzUploadFile[]): Observable<boolean> =>
  new Observable((observer: Observer<boolean>) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      this.message.error('You can only upload JPG file!', {
        nzDuration: 10000
      });
      observer.complete();
      return;
    }
    const isLt2M = file.size! / 1024 / 1024 < 2;
    if (!isLt2M) {
      this.message.error('Image must smaller than 2MB!', {
        nzDuration: 10000
      });
      observer.complete();
      return;
    }
    observer.next(isJpgOrPng && isLt2M);
    observer.complete();
  });

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        break;
      case 'error':
        this.message.error('Network error');
        this.loading = false;
        break;
    }
  }
  
}
