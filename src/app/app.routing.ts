import { ManifestPageComponent } from './manifest-page/manifest-page.component';
import { MarketPageComponent } from './market-page/market-page.component';
import { Routes, RouterModule } from "@angular/router";

const APP_ROUTES : Routes = [
    { path: '', component: ManifestPageComponent },
    { path: 'manifest', component:  ManifestPageComponent },
    { path: 'market', component:  MarketPageComponent }
];

export const routing = RouterModule.forRoot( APP_ROUTES );