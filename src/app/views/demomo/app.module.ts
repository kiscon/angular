import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './demo/home/home.component';
import { ProductComponent } from './demo/product/product.component';
import { Code404Component } from './demo/code404/code404.component';
import { ProductDescComponent } from './demo/product-desc/product-desc.component';
import { SellerInfoComponent } from './demo/seller-info/seller-info.component';
import { ChatComponent } from './demo/chat/chat.component';
import { Product1Component } from './demo/product1/product1.component';
import { ProductService } from './shared/product.service';
import { Product2Component } from './demo/product2/product2.component';
import {LoggerService} from "./shared/logger.service";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {DatastoreService} from "./shared/datastore.service";
import { OrderComponent } from './demo/order/order.component';
import { DownloadComponent } from './rider/download/download.component';
import { DemoComponent } from './demo/demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    Code404Component,
    ProductDescComponent,
    SellerInfoComponent,
    ChatComponent,
    Product1Component,
    Product2Component,
    OrderComponent,
    DownloadComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ProductService,LoggerService,DatastoreService,
    {
      provide:LocationStrategy, useClass: HashLocationStrategy
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
