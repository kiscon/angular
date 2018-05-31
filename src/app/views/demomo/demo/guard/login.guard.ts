import {CanActivate} from "@angular/router";
/**
 * Created by chengjie on 2018/4/8.
 */
export class LoginGuard implements CanActivate {
  canActivate(){
    let loggedIn: boolean = Math.random() < 0.5;
    if(!loggedIn){
      console.log("用户未登录");
    }else{
      console.log("用户登录");
    }
    return loggedIn
  }
}
