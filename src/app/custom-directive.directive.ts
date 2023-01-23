import { Directive, ElementRef,  HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private _elemRef:ElementRef, private _renderer2:Renderer2) { 
    _renderer2.setStyle(_elemRef.nativeElement, 'color', 'green');
  }

}

// @Directive({
//   selector: '[myNumberOnly]'
//  })
//  export class CustomDirectiveDirective {
//   // Allow decimal numbers and negative values
//   private regex: RegExp = new RegExp(/^-?[0-9]+(\.[0-9]*){0,1}$/g);
//   // Allow key codes for special events. Reflect :
//   // Backspace, tab, end, home
//   private specialKeys: Array<string> = [ 'Backspace', 'Tab', 'End', 'Home', '-' ];
 
//  constructor(private el: ElementRef) {
//   }
//   //This is a function decorator that accepts an event name as an argument. When that event gets fired on the host element it calls the associated function.
//   @HostListener('keydown', [ '$event' ])
//   onKeyDown(event: KeyboardEvent) {
//   // Allow Backspace, tab, end, and home keys
//   if (this.specialKeys.indexOf(event.key) !== -1) {
//   return;
//   }
//   let current: string = this.el.nativeElement.value;
//   let next: string = current.concat(event.key);
//   if (next && !String(next).match(this.regex)) {
//   event.preventDefault();
//   }
//   }
//  }