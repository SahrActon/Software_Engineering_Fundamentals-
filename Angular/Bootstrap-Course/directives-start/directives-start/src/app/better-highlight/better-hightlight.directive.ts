import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {


  // Pass data from parent to child with input binding
  @Input() defaultColor = 'transparent';
  @Input('appBetterHightlight') hightlightColor = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor;

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    /*this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');*/
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor =  this.hightlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }




}
