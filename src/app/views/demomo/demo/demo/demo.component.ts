import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'app works!';
  stock = '';

  constructor(private router: Router){

  }
  ngOnInit() {

  }

  toProductDetails() {
    this.router.navigate(['/demo/product', 1]);
  }

}
