import {Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'returnMonthYear'})
export class ReturnMonthYearPipe implements PipeTransform {
  transform(date) {
    return date.slice(0,4)+date.substr(date.length-4)
  }
}
