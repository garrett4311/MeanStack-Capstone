import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthModule } from './auth/auth.module';
import { UserRetrieveComponent } from './user-retrieve/user-retrieve.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { Globals } from './globals';
import { UserAddComponent } from './user-add/user-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserUpdateComponent } from './user-update/user-update.component';
import { ProductRetrieveComponent } from './product-retrieve/product-retrieve.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserRetrieveComponent,
    UserDeleteComponent,
    AdminhomeComponent,
    UserAddComponent,
    UserUpdateComponent,
    ProductRetrieveComponent,
    ProductDeleteComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    ShopComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
