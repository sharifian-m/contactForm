import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // pure:false
})
export class FilterPipe implements PipeTransform {
  transform(value: string, filterstring: string, filterType: number): any {
    if (value.length == 0 || filterstring == '') {
      return value;
    }
    const resultArray = [];
    for (let item of value) {
      if (item[filterType] == filterstring) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
