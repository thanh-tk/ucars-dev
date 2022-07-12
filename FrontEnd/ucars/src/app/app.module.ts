import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzMenuModule  } from 'ng-zorro-antd/menu';
import { NzToolTipModule  } from 'ng-zorro-antd/tooltip';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputModule } from 'ng-zorro-antd/input';
import {NzListModule}  from 'ng-zorro-antd/list'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDividerModule } from 'ng-zorro-antd/divider';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './Layout/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { IconDefinition } from '@ant-design/icons-angular';
import { AccountBookFill, 
  MenuFoldOutline, 
  MenuUnfoldOutline, 
  CarOutline, 
  AppstoreOutline
} from '@ant-design/icons-angular/icons';
import { BrandListComponent } from './Layout/brand-list/brand-list.component';
import { HomeComponent } from './Layout/home/home.component';

const icons: IconDefinition[] = [ 
  MenuUnfoldOutline, 
  MenuFoldOutline, 
  CarOutline,
  AppstoreOutline
];
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BrandListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzMenuModule,
    NzToolTipModule,
    NzGridModule,
    NzLayoutModule,
    NzDropDownModule,
    NzInputModule,
    NzListModule,
    NzCheckboxModule,
    NzDividerModule,
    NzAvatarModule,
    NzIconModule.forChild(icons),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
