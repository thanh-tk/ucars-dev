
import { NzMessageService } from 'ng-zorro-antd/message';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd-module.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrandListComponent } from './brand-list.component';

@NgModule({
  declarations: [
    BrandListComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    BrandListComponent
  ],
  providers: [{provide: NzMessageService }],


})
export class BrandListModule { }
