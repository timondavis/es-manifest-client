import { Directive, HostBinding, EventEmitter, HostListener } from '@angular/core';
import { Output } from "@angular/core";

@Directive({
  selector: '[spcc-delete-button]'
})
export class DeleteButtonDirective {

  @HostBinding( 'class.glyphicon' ) glyphIcon : boolean = true;
  @HostBinding( 'class.glyphicon-remove' )  glyphIconRemove : boolean = true;

  @HostBinding( 'style.cursor' ) cursor : string = "crosshair";
  @HostBinding( 'style.color' ) color : string = "red";

  @HostListener( 'click' ) doClick(){

    this.onclick();
  }

  @Output( 'delete' ) deleted : EventEmitter<boolean>;

  constructor() {

    this.deleted = new EventEmitter<boolean>();
  }

  public onclick() {

    this.deleted.emit( true );
  }

}