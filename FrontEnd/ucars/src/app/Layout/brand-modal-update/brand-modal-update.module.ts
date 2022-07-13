import { NzMessageService } from 'ng-zorro-antd/message';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd-module.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrandModalUpdateComponent } from './brand-modal-update.component';

@NgModule({
  declarations: [
    BrandModalUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule

  ],
  exports: [
    BrandModalUpdateComponent
  ],
  providers: [{provide: NzMessageService }],
})
export class BrandModalUpdateModule { }
