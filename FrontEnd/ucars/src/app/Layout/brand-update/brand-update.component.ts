import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import { brand } from 'src/app/Models/Brand.model';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BrandService } from 'src/app/Service/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.scss']
})
export class BrandUpdateComponent implements OnInit {
  data: brand = new brand;
  @Input() showModal: boolean = false;
  @Output() hideModal = new EventEmitter();

  loading = false;
  isEdit = false;
  avatarUrl?: string
  statusList: Array<string> = ['Inactive', 'Active'];
  form!: FormGroup;


  constructor(
    private message: NzMessageService,
    public _fb : FormBuilder,
    private Actroute: ActivatedRoute,
    private router: Router,
    private _service: BrandService,
  ) { }

  ngOnInit(): void {
    this.fetchBrandInfo()
  }

  fetchBrandInfo(){
    const id = this.Actroute.snapshot.paramMap.get('id');
    this._service.getBrand(Number(id))
    .subscribe(data => {
      this.data = (data as brand);
    });
    this.form = this._fb.group({
      name: this.data.name,
      description: this.data.description,
      logo: this.data.logo,
      status: this.data.status,
    });
  }
  handleCancel(){
    this.showModal = false;
    this.hideModal.emit(false);
  }

  handleOk(){
    this.showModal = false;
    this.hideModal.emit(false);
  }

  handleEdit(){
    this.isEdit = true;
  }

  handleDelete(){

    this._service.deleteBrand(this.data.id);
    this.message.info('Brand Delete Successfully!', {
      nzDuration: 10000
    });
    this.isEdit = false;
    this.router.navigateByUrl('/brandslist');
  }

  handleSubmit(){
    let b = {...this.form?.value, logo: this.avatarUrl ?? this.data.logo, id: this.data.id};

    this._service.updateBrand(b);
    this.message.success('Brand Create Successfully!', {
      nzDuration: 10000
    });
    this.isEdit = false;
    this.fetchBrandInfo();
  }


  //HELPER FUNCTIONS *----------------------------------------------------------------
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
        // Get this url from response in real world.y
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
