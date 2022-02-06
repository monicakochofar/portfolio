import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject,  } from 'rxjs/internal/Subject';

@Directive({
  selector: '[observeVisibility]',
})
export class ObserveVisibilityDirective implements OnInit {
  //@Input() debounceTime = 0; //TODO: add debounce time
  @Input() threshold = 1;
  //@Input() elementId: string

  @Output() visible = new EventEmitter<HTMLElement>();

  //private observer: IntersectionObserver | undefined;
  private subject$ = new Subject<{
    entry: IntersectionObserverEntry;
    observer: IntersectionObserver;
  }>();

  constructor(private element: ElementRef) {}

  ngOnInit() {

  }

  createObserver() {
    let options = {
      root: document.querySelector('#scrollArea'), // element used as the viewport
      rootMargin: '0px', // margin around root
      threshold: this.threshold // 100% of the target is visible before invoking callback
    }

    let callback = (entries, observer) => {
      entries.forEach(entry => {
        // Each entry describes an intersection change for one observed
        // target element:
        //   entry.boundingClientRect
        //   entry.intersectionRatio
        //   entry.intersectionRect
        //   entry.isIntersecting
        //   entry.rootBounds
        //   entry.target
        //   entry.time
      });
    };
    
    let observer = new IntersectionObserver(callback, options);

    let target = document.getElementById('#about');
    //let target = document.querySelector('.section');
    target && observer.observe(target);
  }

}