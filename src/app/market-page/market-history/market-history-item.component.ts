import { Component, OnInit } from '@angular/core';
import { MarketDataPoint } from "../market-data-point";
import { Input } from "@angular/core/src/metadata/directives";

@Component({
  selector: '[spcc-market-history-item]',
  templateUrl: './market-history-item.component.html',
  styleUrls: ['./market-history-item.component.css']
})
export class MarketHistoryItemComponent implements OnInit {

  @Input() dataPoint : MarketDataPoint;

  constructor() { }

  ngOnInit() {
  }

  public handleDeleted( dataPoint : MarketDataPoint ) : void {

      // Delete
  }

}
