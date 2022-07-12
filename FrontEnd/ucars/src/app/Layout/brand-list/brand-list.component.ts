import { Component, OnInit } from '@angular/core';
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
  sortList: Array<string> = ['All', 'Last Updated', 'Created'];
  brandList: brand[] = [];

  statusList: Array<string> = ['Inactive', 'Active'];
  currentSelect: string = '';
  createModal: boolean = false;

  loading = false;
  avatarUrl?: string
  previewImage: string | undefined = '';
  previewVisible = false;
  
  form!: FormGroup;

  constructor(
    private _service: BrandService,
    // private msg: NzMessageService
    public fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.currentSelect = this.sortList[0];
    this.form = this.fb.group({
      name: '',
      description: '',
      logo: '',
      status: '',
    });
    this._service.getBrands()
      .subscribe(data => {
        this.brandList = data as brand[];
      });
  }

  _OnItemClick(item: string): void {
    this.currentSelect = item;
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

  handleSubmit(){
    let b = {...this.form?.value, logo: this.avatarUrl};

    this._service.createBrand(b);
  }

  beforeUpload = (file: NzUploadFile, _fileList: NzUploadFile[]): Observable<boolean> =>
  new Observable((observer: Observer<boolean>) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      // this.msg.error('You can only upload JPG file!');
      observer.complete();
      return;
    }
    const isLt2M = file.size! / 1024 / 1024 < 2;
    if (!isLt2M) {
      // this.msg.error('Image must smaller than 2MB!');
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
        // this.msg.error('Network error');
        this.loading = false;
        break;
    }
  }
  
}
