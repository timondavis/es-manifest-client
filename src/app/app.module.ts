import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './header/dropdown.directive';
import { ManifestPageComponent } from './manifest-page/manifest-page.component';
import { ManifestListComponent } from './manifest-page/manifest-list/manifest-list.component';
import { ManifestListItemComponent } from './manifest-page/manifest-list/manifest-list-item.component';
import { ManifestFormComponent } from './manifest-page/manifest-form/manifest-form.component';

import { ManifestDataService } from './manifest-page/manifest-data.service';
import { TransactionCalculatorService } from './transaction-calculator/transaction-calculator.service';

import { DeleteButtonDirective } from './shared/delete-button.directive';
import { DeleteItemDirective } from './shared/delete-item.directive';
import { TransactionCalculatorComponent } from './transaction-calculator/transaction-calculator.component';

import { routing } from './app.routing';
import { MarketPageComponent } from './market-page/market-page.component';
import { MarketDataEntryFormComponent } from './market-page/market-data-entry-form/market-data-entry-form.component';
import { PrettyInputComponent } from './shared/pretty-input/pretty-input.component';

import { MarketDataService } from './market-page/market-data.service';
import { MarketReportComponent } from './market-page/market-report/market-report.component';
import { MarketHistoryComponent } from './market-page/market-history/market-history.component';
import { MarketReportService } from './market-page/market-report.service.ts';
import { MarketSpeculationComponent } from './market-page/market-speculation/market-speculation.component';
import { MarketHistoryItemComponent } from './market-page/market-history/market-history-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    ManifestPageComponent,
    ManifestListComponent,
    ManifestListItemComponent,
    ManifestFormComponent,
    DeleteButtonDirective,
    DeleteItemDirective,
    TransactionCalculatorComponent,
    MarketPageComponent,
    MarketDataEntryFormComponent,
    PrettyInputComponent,
    MarketReportComponent,
    MarketHistoryComponent,
    MarketSpeculationComponent,
    MarketHistoryItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ ManifestDataService, TransactionCalculatorService, MarketDataService, MarketReportService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
