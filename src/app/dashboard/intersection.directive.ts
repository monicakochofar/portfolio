import { Directive, ElementRef, Renderer2, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  selector: '[fadeIn]',
})
export class FadeInDirective implements OnInit {

  @Input() thresholdMax = .8;
  @Input() thresholdMin = .5;
  @Output() isVisible = new EventEmitter <string>();

  constructor(
      private element: ElementRef,
      private renderer: Renderer2
    ) {}

    //TODO: possibly implement debouncing

  ngOnInit() {
    this.createObserver();
  }

  addClassName(className) {
    this.renderer.addClass(this.element.nativeElement, className);
    this.isVisible.emit();
  }

  removeClassName(className) {
    if (this.element.nativeElement.classList.contains(className)) {
      this.renderer.removeClass(this.element.nativeElement, className);
    }
  }

  createObserver() {
    let options = {
      //root: document.querySelector('#dashboard'), // element used as the viewport
      rootMargin: '-20px', // margin around root
      threshold: [this.thresholdMin, this.thresholdMax] // 100% of the target is visible before invoking callback
    }

    const callback = (entries) => {
      entries && entries.forEach(entry => {
        // console.log('entry ', entry.isIntersecting);
        if (entry.isIntersecting) {
          this.addClassName('visible');
        } else {
          this.removeClassName('visible');
        }
      });
    };
    
    const observer = new IntersectionObserver(callback, options);
    const target = this.element.nativeElement;
    target && observer.observe(target);
  }

}