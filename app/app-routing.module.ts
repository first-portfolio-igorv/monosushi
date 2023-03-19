import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { DiscountComponent } from './pages/discount/discount.component';
import { DiscountInfoComponent } from './pages/discount-info/discount-info.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDiscountComponent } from './admin/admin-discount/admin-discount.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AboutComponent } from './pages/about/about.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"admin", component:AdminComponent},
  {path:"admin-discount", component:AdminDiscountComponent},
  {path:"admin-category", component:AdminCategoryComponent},
  {path:"admin-order", component:AdminOrderComponent},
  {path:"admin-product", component:AdminProductComponent},
  {path:"delivery", component:DeliveryComponent},
  {path:"discount", component:DiscountComponent},
  {path:"discount-info", component:DiscountInfoComponent},
  {path:"product/:category", component:ProductComponent},
  {path:"product-info", component:ProductInfoComponent},
  {path:"about", component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
