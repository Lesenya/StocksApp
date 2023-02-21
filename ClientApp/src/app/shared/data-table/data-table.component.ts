import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KeyValuePair } from 'src/app/core/interfaces/key-value-pair';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input() tableData: Array<any>;
  @Input() tableHeaders: KeyValuePair[];
  @Output() public onRowClick = new EventEmitter();

  public itemsPerPage = 4;
  public selectedPage = 1;
  public searchTokens: KeyValuePair[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  public get filterTableData(): Array<any> {
    let pageIndex = (this.selectedPage - 1) * this.itemsPerPage;
    return this.searchResults.slice(pageIndex, pageIndex + this.itemsPerPage);
  }

  public get pageNumbers(): number[] {
    return Array(Math.ceil(this.searchResults.length / this.itemsPerPage)).fill(0).map((x, i) => i + 1);
  }

  public get searchResults(): Array<any> {
    return this.tableData.filter(x => {
      let result = true;
      this.searchTokens.forEach(token => {
        result &&= x[token.key].includes(token.value);
      });
      return result;
    })
  }

  public changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  public changePageSize(event: Event) {
    const newSize = (event.target as HTMLInputElement).value;
    this.itemsPerPage = Number(newSize);
    this.changePage(1);
  }

  public rowClick(id: number) {
    this.onRowClick.emit(id);
  }

  public search(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    const key = (event.target as HTMLInputElement).getAttribute("data-name");
    var index = this.searchTokens.findIndex(token => token.key == key);

    if (index > -1 && !value) {
      this.searchTokens.splice(index, 1);
    } else if (index < 0 && value) {
      this.searchTokens.push({ key, value });
    }
  }
}
