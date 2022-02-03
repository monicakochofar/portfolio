import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject,  } from 'rxjs/internal/Subject';

@Directive({
  selector: '[observeVisibility]',
})
export class ObserveVisibilityDirective implements OnInit {
  @Input() debounceTime = 0;
  @Input() threshold = 1;

  @Output() visible = new EventEmitter<HTMLElement>();

  private observer: IntersectionObserver | undefined;
  private subject$ = new Subject<{
    entry: IntersectionObserverEntry;
    observer: IntersectionObserver;
  }>();

  constructor(private element: ElementRef) {}

  ngOnInit() {

  }

}