import {CanDeactivate} from "@angular/router";
import {ProductComponent} from "../product/product.component";
/**
 * Created by chengjie on 2018/4/8.
 */
export class UnsavedGuard implements CanDeactivate<ProductComponent>{
  canDeactivate(component: ProductComponent){
    return window.confirm("你还没有保存，确定退出吗?");
  }
}
