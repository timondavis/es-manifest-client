import { Component } from '@angular/core';
import { PrettyInputComponent } from "../pretty-input/pretty-input.component";

@Component({
  selector: 'spcc-pretty-money-input',
  templateUrl: './pretty-money-input.component.html',
  styleUrls: ['./pretty-money-input.component.css']
})
export class PrettyMoneyInputComponent extends PrettyInputComponent {

  constructor() {
    super();
  }

}
