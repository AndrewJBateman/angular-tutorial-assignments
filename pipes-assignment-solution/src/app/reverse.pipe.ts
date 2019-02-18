import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    const valueString = <string>value;
    return valueString.split('').reverse().join('');
  }
}
