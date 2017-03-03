import {Pipe, PipeTransform } from '@angular/core'; 
@Pipe({name: 'returnMonthYear'})
export class ReturnMonthYearPipe implements PipeTransform {
  transform(date) {
    "Oct 1, 2009"
    return date.slice(0,4)+date.substr(date.length-4)
  }
}
