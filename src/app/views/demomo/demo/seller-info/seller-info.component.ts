import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DatastoreService} from "../../shared/datastore.service";

@Component({
  selector: 'app-seller-info',
  templateUrl: './seller-info.component.html',
  styleUrls: ['./seller-info.component.scss']
})
export class SellerInfoComponent implements OnInit {
  public sellerId:number;
  private userData:any
  constructor(private routeInfo: ActivatedRoute,private datastoreService:DatastoreService) { }

  ngOnInit() {
    this.sellerId = this.routeInfo.snapshot.params["id"];
    this.userData = this.datastoreService.getObject("userInfo")
    console.log("取出存储数据：",this.userData)
  }

}
