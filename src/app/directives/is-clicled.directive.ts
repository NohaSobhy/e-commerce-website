import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[IsClicled]',
  standalone: true
})
export class IsClicledDirective {


  constructor(private el: ElementRef) {}

  private cssClasses = ['border', 'border-primary', 'border-2' , 'p-2' , 'rounded' ]; 


  @HostListener('click') onClick() {
    this.cssClasses.forEach(cls => this.el.nativeElement.classList.toggle(cls));
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.cssClasses.forEach(cls => this.el.nativeElement.classList.remove(cls));
  }

}
