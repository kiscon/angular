import {Component, OnChanges, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService, Comment } from 'app/shared/product.service';
import {WebSocketService} from "app/shared/web-socket.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {

  // productTitle:string;
  product:Product; //product.service服务中的
  comments:Comment[];

  newRating:number = 5;
  newComment:string = "";

  isCommentHidden = true;
  isWatched:boolean =false;
  currentBid:number;

  subscription:Subscription;

  constructor(
    private routeInfo: ActivatedRoute,
    private productService:ProductService,
    private wsService:WebSocketService
  ) { }

  ngOnInit() {
    let productId:number = this.routeInfo.snapshot.params["productId"];
    //手工订阅---获取商品详情
    this.productService.getProduct(productId).subscribe(
      product => {
        this.product = product;
        this.currentBid = product.price;
      }
    );
    //获取评论
    this.productService.getCommentForProuductId(productId).subscribe(
      comments => this.comments = comments
    );
  }

  //添加评论
  addComment(){
    let comment = new Comment(0,this.product.id,new Date().toString(),"someone",this.newRating,this.newComment);
    this.comments.unshift(comment);

    //匿名回调，初始值是0
    let sum = this.comments.reduce((sum,comment)=>sum + comment.rating , 0)
    this.product.rating = sum / this.comments.length;

    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;
  }

  watchProduct(){
    if(this.subscription){
      this.subscription.unsubscribe();
      this.isWatched =false;
      this.subscription =null;
    }else{
      this.isWatched = true;
      this.subscription = this.wsService.createObservableSocket("ws://localhost:5000",this.product.id)
        .subscribe(
          products => {
            let product = products.find( p => p.productId === this.product.id );
            this.currentBid = product.bid;
            console.log(this.currentBid);
          });
    }

  }

}
