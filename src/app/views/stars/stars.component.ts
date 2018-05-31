import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit, OnChanges {

  @Input()//上级传递rating属性的值进来
  // private rating: number = 0;
  public rating: number = 0;

  @Output()//发送一个事件，从而实现双向数据绑定
  private  ratingChange:EventEmitter<number> = new EventEmitter();

  @Input()
  // private readonly:boolean = true;
  public readonly:boolean = true;

  // private stars: boolean[];
  public stars: boolean[];

  constructor() { }

  ngOnInit() {
    // this.stars = [];
    // for (let i = 1;  i<=5 ; i++) {
    //   this.stars.push(i>this.rating); //false为实心，true为空心
    // }
  }

  ngOnChanges(changes: SimpleChanges): void {
    //stars重置的行为放到change钩子里
    this.stars = [];
    // console.log(this.rating);
    for (let i = 1;  i<=5 ; i++) {
      this.stars.push(i>this.rating); //false为实心，true为空心
    }

  }

  //点击选择星星
  clickStar(index:number){
    if(!this.readonly){
      this.rating = index + 1;
      // console.log(this.rating);
      this.ngOnInit();
      this.ratingChange.emit(this.rating);
    }
  }

}
