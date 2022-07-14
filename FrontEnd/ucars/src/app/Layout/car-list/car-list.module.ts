import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'src/app/utils/ng-zorro-antd-module.module';
import { CarListComponent } from './car-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    CarListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgZorroAntdModule,
  ],
  exports: [
    CarListComponent
  ]
})
export class CarListModule { }
