import { Injectable } from '@angular/core';

@Injectable()
export class DatastoreService {

  constructor() { }

  set(key:string,value:string){
    window.localStorage[key]=value;
  };

  get(key:string,defaultValue:string){
    return window.localStorage[key] || defaultValue;
  };

  setObject(key:string,value:any){
    return window.localStorage[key]=JSON.stringify(value);
  };

  getObject(key:string) {
    return JSON.parse(window.localStorage[key] || '{}');
  };
}
