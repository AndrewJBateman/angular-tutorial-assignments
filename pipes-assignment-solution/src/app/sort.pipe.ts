import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any): any {
    const valueArray = <Array<any>>value;
    return valueArray.sort((x,y) => x.name > y.name ? 1 : -1);
  }
}
