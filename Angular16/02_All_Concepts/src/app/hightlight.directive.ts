import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[DirHightlight]'
})
export class HightlightDirective {

  private elementSelected = false;

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'red';
  }
  
  @HostListener('mouseover')

  private onmouseover() {
    this.elementSelected = !this.elementSelected;
    if (this.elementSelected) {
      this.el.nativeElement.style.background = 'yellow';
    }
    else {
      this.el.nativeElement.style.background = 'white';
    }
  }


}
