import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchText: string): any {

    if(searchText==='')
    {
      return value
    }
    else
    {
      return value.filter((item: string) => item.startsWith(searchText));
    }


  }

}
