import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[setBackground]',
})
export class SetBackground implements OnInit {
  // private element: ElementRef;

  constructor(private element: ElementRef) {
    // this.element = element;
  }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = '#36454f';
    this.element.nativeElement.style.color = 'white';
  }
}
