import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { TopbarComponent } from './topbar.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    TopbarComponent
  ],
  imports: [
    CommonModule,
    NzModalModule,
    NzGridModule,
    NzAvatarModule,
    NzDropDownModule,
    NzIconModule
  ],
  exports: [
    TopbarComponent
  ]
})
export class TobarModule { }
