import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandListComponent } from './Layout/brand-list/brand-list.component';
import { BrandUpdateComponent } from './Layout/brand-update/brand-update.component';

const routes: Routes = [
  { path: '', redirectTo: '/brandslist', pathMatch: 'full' },
  { path: 'brandslist', component: BrandListComponent },
  { path: 'brand/:id', component: BrandUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
