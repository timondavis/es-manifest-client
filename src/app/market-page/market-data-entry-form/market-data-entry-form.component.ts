import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { ViewChild } from "@angular/core/src/metadata/di";
import { PrettyInputComponent } from "../../shared/pretty-input/pretty-input.component";

@Component({
  selector: 'spcc-market-data-entry-form',
  templateUrl: './market-data-entry-form.component.html',
  styleUrls: ['./market-data-entry-form.component.css']
})
export class MarketDataEntryFormComponent implements OnInit, OnChanges, AfterViewInit {

  @ViewChild( 'howsYourBacon' ) bacon : PrettyInputComponent;

  constructor() {


  }


  ngAfterViewInit() {

  }

  ngOnInit() {
  }

  ngOnChanges( event ) {

  }

  handlekeydown( event ) {


    console.log( this.bacon.fieldValue );
  }
}
