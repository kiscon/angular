import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './demo/home/home.component';
import {ProductComponent} from './demo/product/product.component';
import {Code404Component} from './demo/code404/code404.component';
import {ProductDescComponent} from './demo/product-desc/product-desc.component';
import {SellerInfoComponent} from './demo/seller-info/seller-info.component';
import {ChatComponent} from './demo/chat/chat.component';
import {LoginGuard} from './demo/guard/login.guard';
import {UnsavedGuard} from './demo/guard/unsaved.guard';
import {ProductResolve} from './demo/guard/product.resolve';
import {ProductService} from './shared/product.service';
import {DownloadComponent} from './rider/download/download.component';
import {DemoComponent} from './demo/demo/demo.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'demo/chat', component: ChatComponent, outlet: 'aux'},
  { path: 'demo/demo', component: DemoComponent },
  { path: 'demo/product/:id', component: ProductComponent, children:[
    {path: '', component: ProductDescComponent},
    {path: 'seller/:id', component: SellerInfoComponent}
  ], canActivate: [LoginGuard],
     canDeactivate: [UnsavedGuard],
     resolve:{
        product: ProductResolve
     }
  },
  {path: 'rider/download',component:  DownloadComponent },// 骑手业务-我来送下载页
  { path: '**', component: Code404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard,UnsavedGuard,ProductResolve,ProductService]
})
export class AppRoutingModule { }
