import { NzMessageService } from 'ng-zorro-antd/message';
import { NgZorroAntdModule } from 'src/app/utils/ng-zorro-antd-module.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { BrandUpdateComponent } from './brand-update.component';

@NgModule({
  declarations: [
    BrandUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    RouterModule

  ],
  exports: [
    BrandUpdateComponent
  ],
  providers: [{provide: NzMessageService }],
})
export class BrandModalUpdateModule { }
