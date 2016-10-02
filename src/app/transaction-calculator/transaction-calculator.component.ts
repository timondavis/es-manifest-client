import { Component, OnInit, AfterContentChecked, ElementRef } from '@angular/core';
import { ViewChild } from "@angular/core/src/metadata/di";
import { TransactionCalculatorService } from "./transaction-calculator.service";

@Component({
  selector: 'spcc-transaction-calculator',
  templateUrl: './transaction-calculator.component.html',
  styleUrls: ['./transaction-calculator.component.css']
})
export class TransactionCalculatorComponent implements OnInit {

  constructor( private transactionCalculatorService : TransactionCalculatorService ) { }


  @ViewChild( 'purchasedUnits' ) purchasedUnitsRef : ElementRef;
  @ViewChild( 'purchasedPrice' ) purchasedPriceRef : ElementRef;
  @ViewChild( 'sellPrice' ) sellPriceRef : ElementRef;
  @ViewChild( 'profitPercentage' ) profitPercentageRef : ElementRef;
  @ViewChild( 'profitMoney' )  profitMoneyRef : ElementRef;

  onsubmit( event ) {

    event.preventDefault();

    // Collect values from fields
    let purchasedUnits = this.purchasedUnitsRef.nativeElement.value;
    let purchasedPrice = this.purchasedPriceRef.nativeElement.value;
    let purchasedValue = purchasedUnits * purchasedPrice;

    let sellPrice = this.sellPriceRef.nativeElement.value;
    let sellValue = purchasedUnits * sellPrice;

    // Calculate values
    let profitPercentage = TransactionCalculatorComponent.calculateProfitPercentage( purchasedValue, sellValue );
    let profitMoney = TransactionCalculatorComponent.calculateProfitMoney( purchasedValue, sellValue );

    console.log( profitPercentage );
    console.log( profitMoney );

    TransactionCalculatorComponent.writeValueToComponent( this.profitPercentageRef, profitPercentage, 2, '%' );
    TransactionCalculatorComponent.writeValueToComponent( this.profitMoneyRef, profitMoney, 2, '$' );
  }

  private static writeValueToComponent ( el : ElementRef, value : number, decimals : number, symbol : string ) {

    el.nativeElement.value = TransactionCalculatorComponent
        .createFormattedSymbolString( value, decimals, symbol);
  }

  private static calculateProfitPercentage( cost : number, income : number ) : number {

    var rawProfit = TransactionCalculatorComponent.calculateProfitMoney( cost, income );

    return ( rawProfit / cost  * 100 );
  }

  private static calculateProfitMoney( cost : number, income : number ) : number {

    return (income - cost);
  }

  private static createFormattedSymbolString( value : number, decimalPlaces : number, symbol : string ) : string {

    let isNegative = ( value < 0 );

    let returnString = '';

    if ( isNegative ) {

      returnString = '-';
    }

    value = Math.abs( value );

    returnString += symbol;
    returnString += value.toFixed( decimalPlaces );

    return returnString;
  }

  ngOnInit() {}

  ngAfterContentChecked() {

    let that = this;

    this.transactionCalculatorService.manifestItemSelected.subscribe(
        function( item ) {
          that.purchasedUnitsRef.nativeElement.value = item.getTonnage();
          that.purchasedPriceRef.nativeElement.value = item.getUnitPrice();
        },
        ( err ) => console.log( err )
    );
  }

}
