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
import { DeleteButtonDirective } from './shared/delete-button.directive';
import { DeleteItemDirective } from './shared/delete-item.directive';

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
    DeleteItemDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [ ManifestDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
