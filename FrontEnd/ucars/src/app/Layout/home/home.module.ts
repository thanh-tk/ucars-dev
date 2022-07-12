import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TobarModule } from '../topbar/topbar.module';
import { HomeComponent } from './home.component';

import { NzMenuModule  } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { BrandListModule } from '../brand-list/brand-list.module';
import { SidebarModule } from '../sidebar/sidebar.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    TobarModule,
    NzMenuModule,
    NzLayoutModule,
    BrandListModule,
    SidebarModule,
  ],
  exports: [
    HomeComponent
  ],
})
export class HomeModule { }
