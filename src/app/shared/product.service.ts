import {EventEmitter, Injectable} from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/Rx";

@Injectable()
export class ProductService {

  // private products:Product[] = [
  //   new Product(1,"第一个商品",1.99,3.5,"这是我的第一个商品",["电子设备","数码"]),
  //   new Product(2,"第二个商品",2.99,2.5,"这是我的第二个商品",["图书","数码"]),
  //   new Product(3,"第三个商品",3.99,1.5,"这是我的第三个商品",["电子设备","数码"]),
  //   new Product(4,"第四个商品",4.99,4.5,"这是我的第四个商品",["电子设备","数码"]),
  //   new Product(5,"第五个商品",5.99,3.5,"这是我的第五个商品",["电子设备","数码"]),
  //   new Product(6,"第六个商品",6.99,3.5,"这是我的第六个商品",["电子设备","数码"])
  // ];

  // private comments:Comment[] = [
  //   new Comment(1,1,"2017-11-26 21:56:50","张三",3,"很好"),
  //   new Comment(2,1,"2017-11-26 22:56:50","李四",3,"很好"),
  //   new Comment(3,1,"2017-11-26 23:56:50","王五",3,"很好"),
  //   new Comment(4,2,"2017-11-26 00:56:50","赵六",3,"很好"),
  // ]
  searchEvent:EventEmitter<ProductSearchParams> = new EventEmitter();

  constructor(
    private http: Http
  ) { }

  //获取商品类型
  getAllCategories():string[]{
    return ["电子设备","数码","图书"];
  }

  // 获取商品
  getProuducts():Observable<Product[]>{
    return this.http.get('/api/productSve/getProducts').map(res => res.json());
  }
  // 获取商品id
  getProduct(id:number):Observable<Product>{
    return this.http.get(`/api/productSve/product/${id}`).map(res => res.json());
  }
  // 获取评论
  getCommentForProuductId(id:number):Observable<Comment[]>{
    // return this.comments.filter((comment:Comment)=>comment.productId == id);
    return this.http.get(`/api/productSve/product/${id}/comments`).map(res => res.json());
  }
  // 搜索
  search(params:ProductSearchParams):Observable<Product[]>{
    return this.http.get("/api/productSve/products", {search:this.enCodeParams(params)}).map(res => res.json());
  }

  private enCodeParams(params:ProductSearchParams){
    return Object.keys(params)
      .filter(key => params[key])
      .reduce((sum:URLSearchParams,key:string)=>{
        sum.append(key,params[key]);
        return sum;
      },  new URLSearchParams());
  }

}


// 商品
export class Product{
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string> //类型断言
  ) { }
}
// 评论
export class Comment{
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user:string,
    public rating: number,
    public content: string,
  ) { }
}
//搜索
export class ProductSearchParams{
  constructor(
    public title: string,
    public price: number,
    public category: string
  ) { }
}
