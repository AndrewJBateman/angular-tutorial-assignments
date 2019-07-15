import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPlaceholder]' // attribute selector
})
export class PlaceholderDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
