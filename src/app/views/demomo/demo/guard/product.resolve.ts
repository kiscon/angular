import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Product} from "../product/product.component";
import {Injectable} from "@angular/core";
/**
 * Created by chengjie on 2018/4/8.
 */

@Injectable()
export class ProductResolve implements Resolve<Product>{
  constructor(private router: Router){

  }
  resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot){
    let productId:number = route.params["id"];
    if(productId == 1){
      return new Product(1, "iPhone7");
    }else{
      this.router.navigate(['/home']);
      return undefined;
    }
  }
}
