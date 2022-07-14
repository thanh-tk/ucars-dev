import { NgZorroAntdModule } from 'src/app/utils/ng-zorro-antd-module.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TopbarComponent } from './topbar.component';

@NgModule({
  declarations: [
    TopbarComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [
    TopbarComponent
  ]
})
export class TobarModule { }
