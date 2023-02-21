import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockDataTableComponent } from './stock-data-table/stock-data-table.component';
import { SharedModule } from '../shared/shared.module';
import { StockDataValueComponent } from './stock-data-value/stock-data-value.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StockDataTableComponent,
    StockDataValueComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [StockDataTableComponent]
})
export class FeaturesModule { }
