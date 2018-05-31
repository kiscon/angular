import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filterFiled: string, keyword: string): any {
    //filterFiled 即products中的数据以哪个字段检索
    //keyword 即输入的关键字

    if(!filterFiled || !keyword){
      return list;
    }

    return list.filter(item =>{
      let filedValue = item[filterFiled];
      return filedValue.indexOf(keyword) >= 0;
    });
  }

}
