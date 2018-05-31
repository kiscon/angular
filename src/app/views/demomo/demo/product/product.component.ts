import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Observable} from "rxjs";
import {Http, Headers} from "@angular/http";
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  dataSource: Observable<any>;
  products:Array<any> = [];
  public productId:number;

  public productName:string;

  constructor(private routeInfo: ActivatedRoute, private http: Http) {
    let myHeaders:Headers = new Headers();
    myHeaders.append("Authorization", "Basic 123456");
    this.dataSource = this.http.get('/api/product',{headers: myHeaders})
      .map((res) => res.json());
  }

  ngOnInit() {
    this.routeInfo.params.subscribe((params: Params) => this.productId = params["id"])
    // this.productId = this.routeInfo.snapshot.queryParams["id"];
    // this.productId = this.routeInfo.snapshot.params["id"];
    this.routeInfo.data.subscribe((data: {product: Product}) => {
      this.productId = data.product.id;
      this.productName = data.product.name
    });
    this.dataSource.subscribe(
      (data) => this.products = data
    );
  }

}

export class Product {
  constructor(public id: number, public name: string){

  }
}
