import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KeyValuePair } from 'src/app/core/interfaces/key-value-pair';
import { StockData } from 'src/app/core/models/stock-data.model';
import { StockService } from 'src/app/core/services/stock.service';

@Component({
  selector: 'app-stock-data-table',
  templateUrl: './stock-data-table.component.html',
  styleUrls: ['./stock-data-table.component.css']
})
export class StockDataTableComponent implements OnInit {
  public  stockData: StockData[] = [];
  public tableHeaders: KeyValuePair[] = [{key:"stock", value:"Stock"}, {key:"industry", value:"Industry"}, {key:"sector", value:"Sector"}, {key:"currency_code", value:"Currency Code"}]
  constructor(private stockService: StockService, private router: Router) { }

  ngOnInit(): void {
    this.getStockData();
  }

  public rowClick(id: number) {
    this.router.navigateByUrl(`/values/${id}`);
   }
  
  private getStockData() {
    this.stockService.getStocks().subscribe(data => {
      this.stockData = data;
      console.log(data)
    });
  }
}

