import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[setBackground]',
})
export class SetBackground implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.element.nativeElement.style.backgroundColor = '#36454f';
    // this.element.nativeElement.style.color = 'white';

    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      '#36454f'
    );

    this.renderer.setStyle(this.element.nativeElement, 'color', 'white');

    this.renderer.setAttribute(
      this.element.nativeElement,
      'title',
      'This is example title'
    );
  }
}
