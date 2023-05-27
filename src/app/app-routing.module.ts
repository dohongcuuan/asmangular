import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdminProductsComponent } from './pages/admin/admin-products/admin-products.component';
import { AdminProductsAddComponent } from './pages/admin/admin-products-add/admin-products-add.component';
import { AdminProductsUpdateComponent } from './pages/admin/admin-products-update/admin-products-update.component';

const routes: Routes = [
  
  {path:"",component:AdminProductsComponent},
  {path:"admin/add",component:AdminProductsAddComponent},
  {path:"admin/:id/edit",component:AdminProductsUpdateComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }