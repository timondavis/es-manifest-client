import { Directive, HostBinding } from '@angular/core';
import { HostListener } from "@angular/core/src/metadata/directives";

@Directive({
  selector: '[spcc-dropdown]'
})
export class DropdownDirective {

  private isOpen : boolean = false;

  constructor( ) {}

  @HostBinding( 'class.open' ) get opened() {

    return this.isOpen;
  }

  @HostListener( 'click' ) openDropdown() {

    this.isOpen = true;
  }

  @HostListener( 'mouseleave' ) closeDropdown() {

    this.isOpen = false;
  }
}
