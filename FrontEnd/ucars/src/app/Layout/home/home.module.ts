import { NgZorroAntdModule } from 'src/app/ng-zorro-antd-module.module';

import { AppRoutingModule } from '../../app-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BrandListModule } from '../brand-list/brand-list.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { TobarModule } from '../topbar/topbar.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    TobarModule,
    NgZorroAntdModule,
    BrandListModule,
    SidebarModule,
  ],
  exports: [
    HomeComponent
  ],
})
export class HomeModule { }
