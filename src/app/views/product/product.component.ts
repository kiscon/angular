import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from 'app/shared/product.service';
import { FormControl } from "@angular/forms";
import  "rxjs/Rx";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  // private products:Observable<Product[]>;
  public products:Observable<Product[]>;

  // private imgUrl = 'http://placehold.it/320x150';//这里用单引号
  public imgUrl = 'http://placehold.it/320x150';//这里用单引号

  // private keyword:string;
  // private titleFilter:FormControl = new FormControl();

  constructor(
    private productService:ProductService
  ) {

  }

  ngOnInit() {

    // setTimeout(()=>{
    //   this.products = this.productService.getProuducts();
    // },0)

    this.products = this.productService.getProuducts();

    //定义个流--搜索后的商品
    this.productService.searchEvent.subscribe(params => {
      this.products = this.productService.search(params);
      // console.log(this.products);
    });





    // this.products = this.productService.getProuducts();

    // this.titleFilter.valueChanges
    //   .debounceTime(500) //使用该方法要  import "rxjs/Rx";
    //   .subscribe(value => {
    //     this.keyword = value;
    //     // console.log(value);
    //   });

  }

}

