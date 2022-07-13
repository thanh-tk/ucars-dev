import { NgZorroAntdModule } from 'src/app/ng-zorro-antd-module.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,

  ]
})
export class SidebarModule { }
