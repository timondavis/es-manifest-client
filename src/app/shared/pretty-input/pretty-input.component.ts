import { Component, Input, EventEmitter, OnInit } from '@angular/core';
import { Output } from "@angular/core/src/metadata/directives";

@Component({
  selector: 'spcc-pretty-input',
  templateUrl: './pretty-input.component.html',
  styleUrls: ['./pretty-input.component.css']
})
export class PrettyInputComponent implements OnInit {

  @Input() fieldID : string;
  @Input() fieldLabel : string;
  @Input() fieldValue : string;

  constructor() { }

  ngOnInit() {

  }

  handlekeydown( event ) {

      this.fieldValue = event.target.value;
  }

}
