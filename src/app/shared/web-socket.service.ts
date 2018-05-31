import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import "rxjs/Rx";

@Injectable()
export class WebSocketService {

  ws:WebSocket;
  constructor() { }

  createObservableSocket(url:string, id:number): Observable<any> {
    this.ws = new WebSocket(url);
    return new Observable<string>(
      observer => {
        this.ws.onmessage = (event) => observer.next(event.data);//接到消息的时候发送下一个数据
        this.ws.onerror = (event) => observer.error(event);//错误的时候
        this.ws.onclose =(event) => observer.complete();//关闭
        this.ws.onopen = (event) => this.sendMessage({productId:id});
        return () => this.ws.close();
      }
    ).map(message => JSON.parse(message));
  }
  //向服务器发送一个消息
  sendMessage(message:any){
    this.ws.send(JSON.stringify(message));
  }
}


