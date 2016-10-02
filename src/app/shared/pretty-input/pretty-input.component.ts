import { Component, Input, forwardRef, AfterViewInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { NgModel } from '@angular/forms';

const noop = () => {};

export const PRETTY_INPUT_COMPONENT_VALUE_ACCESSOR : any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PrettyInputComponent ),
  multi: true
};

@Component({
  selector: 'spcc-pretty-input',
  templateUrl: './pretty-input.component.html',
  styleUrls: ['./pretty-input.component.css'],
  providers: [PRETTY_INPUT_COMPONENT_VALUE_ACCESSOR]
})
export class PrettyInputComponent implements ControlValueAccessor, AfterViewInit {

  @Input() label : string;
  @Input() name : string;
  @Input() classes : any = {};
  @Input() leftInnerLabel : string = '';

  private innerValue: any = '';
  private defaultClasses = [ 'form-group', 'row' ];

  private onTouchedCallback: () => void = noop;
  private onChangedCallback: ( _ : any ) => void = noop;

  constructor() { }

  ngAfterViewInit() {

    // Pply default classes
    for( let i = 0 ; i < this.defaultClasses.length ; i++ ) {

      this.classes[this.defaultClasses[i]] = true;
    }
  }

  get value() : any {

    return this.innerValue;
  }

  set value( v : any ) {

    if ( v !== this.innerValue ) {
      this.innerValue = v;
      this.onChangedCallback( v );
    }
  }

  onBlur() {

    this.onTouchedCallback();
  }

  writeValue( value: any ) {

    if ( value !== this.innerValue ) {
      this.innerValue = value;
    }
  }

  // From ControlValueAccessor interface
  registerOnChange( fn: any ) {
    this.onChangedCallback = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched( fn : any ) {
   this.onTouchedCallback = fn;
  }
}
