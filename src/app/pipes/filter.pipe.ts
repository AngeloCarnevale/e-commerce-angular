import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: [], ...args: unknown[]): {} {
    return value.filter((item:any) => item)
  }

}
