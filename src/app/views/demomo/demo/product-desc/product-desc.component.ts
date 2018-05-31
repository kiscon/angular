import { Component, OnInit } from '@angular/core';
import {DatastoreService} from "../../shared/datastore.service";

@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.component.html',
  styleUrls: ['./product-desc.component.scss']
})
export class ProductDescComponent implements OnInit {

  constructor(private datastoreService:DatastoreService) {console.log("1234561") }

  ngOnInit() {
    console.log("存储数据开始：");
    this.datastoreService.setObject("userInfo",{"name":"张三","age":14})
  }

}
