import { Directive, ElementRef, Input, HostListener, HostBinding } from '@angular/core';
@Directive({ selector: '[hoverHighlight]' })
export class HighlightDirective {
    @HostListener('mouseenter') mouseover(){
      this.backgroundColor = this.hightlightColor;
    };
    @HostListener('mouseleave') mouseleave(){
      this.backgroundColor = this.defaultColor;
    }
    @HostBinding('style.backgroundColor') get setColor(){
      return this.backgroundColor;
    }
    @Input() defaultColor = 'yellow'
    @Input('hightlight') hightlightColor = 'blue'

    constructor(el: ElementRef) {
      this.el = el;
       this.el.nativeElement.style.backgroundColor = 'green';
    }
    ngOnInit(){
      this.backgroundColor = 'blue';
    }
}
