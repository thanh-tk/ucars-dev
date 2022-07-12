import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { BrandListComponent } from './brand-list.component';

@NgModule({
  declarations: [
    BrandListComponent
  ],
  imports: [
    CommonModule,
    NzModalModule,
    NzDropDownModule,
    NzInputModule,
    NzListModule,
    NzAvatarModule,
    NzToolTipModule,
    NzGridModule,
    NzCheckboxModule,
    NzDividerModule,
    NzTypographyModule,
    NzButtonModule,
    NzIconModule,
    NzUploadModule,
    NzFormModule,
    NzSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    BrandListComponent
  ]
})
export class BrandListModule { }
