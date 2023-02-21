import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './features/nav-menu/nav-menu.component';
import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';
import { StockDataTableComponent } from './features/stock-data-table/stock-data-table.component';
import { StockDataValueComponent } from './features/stock-data-value/stock-data-value.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    CoreModule,
    HttpClientModule,
    FeaturesModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: StockDataTableComponent, pathMatch: 'full' },
      { path: 'values/:id', component:  StockDataValueComponent}
        ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
