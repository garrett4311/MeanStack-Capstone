import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRetrieveComponent } from './user-retrieve/user-retrieve.component';
import { AuthGuard } from './auth/auth.guard';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { ProductRetrieveComponent } from './product-retrieve/product-retrieve.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'user-retrieve', component:UserRetrieveComponent, canActivate: [AuthGuard]},
  { path: 'user-delete', component:UserDeleteComponent, canActivate: [AuthGuard]},
  { path: 'user-add', component:UserAddComponent, canActivate: [AuthGuard]},
  { path: 'user-update', component:UserUpdateComponent, canActivate: [AuthGuard]},
  { path: 'product-retrieve', component:ProductRetrieveComponent, canActivate: [AuthGuard]},
  { path: 'product-delete', component:ProductDeleteComponent, canActivate: [AuthGuard]},
  { path: 'product-add', component:ProductAddComponent, canActivate: [AuthGuard]},
  { path: 'product-update', component:ProductUpdateComponent, canActivate: [AuthGuard]},
  { path: 'shop', component:ShopComponent, canActivate: [AuthGuard]},
  { path: 'cart', component:CartComponent, canActivate: [AuthGuard]},
  { path: 'adminhome', component:AdminhomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
