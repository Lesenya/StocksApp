import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KeyValuePair } from 'src/app/core/interfaces/key-value-pair';
import { StockDataValue } from 'src/app/core/models/stock-data-value.model';
import { StockService } from 'src/app/core/services/stock.service';

@Component({
  selector: 'app-stock-data-value',
  templateUrl: './stock-data-value.component.html',
  styleUrls: ['./stock-data-value.component.css']
})
export class StockDataValueComponent implements OnInit {
  public stockDataValue: Array<any> = [];
  public tableHeaders: KeyValuePair[] = [{ key: "stock", value: "Stock" }, { key: "date", value: "Date" }, { key: "value", value: "Value" }];

  constructor(private stockService: StockService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = Number.parseInt(this.activeRoute.snapshot.params["id"]);
    this.getStockDataValues(id);
  }

  public cancel() {
    this.router.navigateByUrl("/");
  }
  public exportData() {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(this.stockDataValue))}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = `stock_values_${Date.now()}.json`;

    link.click();
  };
  private getStockDataValues(id: number) {
    this.stockService.getStockValues(id).subscribe(stockValues => {
      this.stockService.getStock(id).subscribe(stockData => {
        this.stockDataValue = stockValues.map(stockValue => {
          return { stock: stockData.stock, date: stockValue.date, value: stockValue.value };
        });
      });
    });
  }
}
