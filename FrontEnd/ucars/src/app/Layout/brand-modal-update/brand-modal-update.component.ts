import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-brand-modal-update',
  templateUrl: './brand-modal-update.component.html',
  styleUrls: ['./brand-modal-update.component.scss']
})
export class BrandModalUpdateComponent implements OnInit {

  openModal: boolean = false;
  loading = false;
  avatarUrl?: string
  statusList: Array<string> = ['Inactive', 'Active'];
  form!: FormGroup;
  constructor(
    private message: NzMessageService,
    public _fb : FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      name: '',
      description: '',
      logo: '',
      status: '',
    });
  }

  handleCancel(){
    this.openModal = false;
  }

  handleOk(){
    this.openModal = false;
  }

  handleSubmit(){
    let b = {...this.form?.value, logo: this.avatarUrl};

    //this._service.createBrand(b);
    this.message.error('Brand Create Successfully!', {
      nzDuration: 10000
    });
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
