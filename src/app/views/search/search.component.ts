import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from "app/shared/product.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  formModel:FormGroup;
  categories:string[];

  constructor(
    private productService:ProductService
  ) {
    let fb = new FormBuilder();
    this.formModel = fb.group({
      title:['',Validators.minLength(3)],
      price:[null,this.positiveNumberValidator],
      category:['-1']
    });
  }

  ngOnInit() {
    this.categories = this.productService.getAllCategories();
  }

  //价格验证
  positiveNumberValidator(control:FormControl):any{
    if(!control.value){
     return null;
    }
    let price = parseInt(control.value);
    if(price>0){
      return null;
    }else {
      return {positiveNumber: true};
    }
  }

  //搜索
  onSearch(){
    if(this.formModel.valid) {
      console.log(this.formModel.value);
      //把表单的值发射出去
      this.productService.searchEvent.emit(this.formModel.value);
    }
  }





}
