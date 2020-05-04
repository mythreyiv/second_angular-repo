import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reve'
})
export class RevePipe implements PipeTransform {

  transform(value: string): string {
    let newstring: string = '' ;

    for ( let i = value.length - 1; i >= 0; i --) {
     newstring += value.charAt(i);
    }
    return newstring;
  }
  }


