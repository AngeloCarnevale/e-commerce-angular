import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upscale',
  standalone: true
})
export class UpscalePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.replace('-I.jpg', '-O.jpg')
  }

}
