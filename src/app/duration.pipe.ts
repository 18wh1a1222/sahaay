import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  currentYear: any;
postedYear: any;
durationTime: any;
durationDay: any;
  transform(value: any): any {
    this.currentYear = new Date().getTime();
    this.postedYear = new Date(value).getTime();
    this.durationTime =  this.currentYear - this.postedYear;
    this.durationDay = Math.round(this.durationTime / (1000 * 3600 * 24));
    return this.durationDay;
  }

}
