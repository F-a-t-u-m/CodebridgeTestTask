import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  transform(value: any, args: any): unknown {
    if (!args) return value;
    const re = new RegExp("\\b(" + args + "\\b)", 'igm');
    value = value.replace(re, '<span class="highlighted-text">$1</span>');
    return value;
  }
}
