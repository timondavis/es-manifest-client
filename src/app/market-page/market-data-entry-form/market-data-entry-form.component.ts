import { Component } from '@angular/core';
import { ViewChild } from "@angular/core/src/metadata/di";
import { PrettyInputComponent } from "../../shared/pretty-input/pretty-input.component";
import { NgModel } from "@angular/forms";

@Component({
  selector: 'spcc-market-data-entry-form',
  templateUrl: './market-data-entry-form.component.html',
  styleUrls: ['./market-data-entry-form.component.css']
})
export class MarketDataEntryFormComponent {


  public model =
    {

    };

  constructor() { }
}
