import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';

@Pipe({
  name: 'formatter'
})

export class FormatterPipe implements PipeTransform {
  transform(value: Date): string {
    return dayjs(value).format('HH:mm')
  }
  
}
