import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortTableDirective } from './directives/sort-table.directive';
import { DataTableComponent } from './data-table/data-table.component';



@NgModule({
  declarations: [
    SortTableDirective,
    DataTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SortTableDirective, DataTableComponent]
})
export class SharedModule { }
