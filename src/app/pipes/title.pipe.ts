import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: string,type?:string): string {
    if(type=="male")
    return `Mr.${value.toUpperCase()}`;
    else if(type=="female")
    return `Mrs.${value.toUpperCase()}`;
    else
    return value.toUpperCase();
  }

}
