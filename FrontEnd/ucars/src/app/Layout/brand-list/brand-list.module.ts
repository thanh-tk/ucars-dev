
import { NzMessageService } from 'ng-zorro-antd/message';
import { NgZorroAntdModule } from 'src/app/utils/ng-zorro-antd-module.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { BrandModalUpdateModule } from '../brand-update/brand-update.module';

import { BrandListComponent } from './brand-list.component';

@NgModule({
  declarations: [
    BrandListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    BrandModalUpdateModule
  ],
  exports: [
    BrandListComponent
  ],
  providers: [{provide: NzMessageService }],


})
export class BrandListModule { }
