import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { SearchComponent } from './views/search/search.component';
import { FooterComponent } from './views/footer/footer.component';
import { CarouselComponent } from './views/carousel/carousel.component';
import { Code404Component } from './views/code404/code404.component';
import { ProductComponent } from './views/product/product.component';
import { StarsComponent } from './views/stars/stars.component';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';
import { HomeComponent } from './views/home/home.component';

import { FilterPipe } from './pipe/filter.pipe'; // 管道
import { ProductService } from './shared/product.service'; // 服务
import { WebSocketService } from "./shared/web-socket.service";

const routeConfig: Routes = [
  {path:'',component:HomeComponent},
  {path:'product/:productId',component:ProductDetailComponent},
  {path: '**', component: Code404Component}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    FooterComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    ProductDetailComponent,
    HomeComponent,
    Code404Component,
    FilterPipe
  ],
  providers: [
    ProductService,
    WebSocketService
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig),
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
