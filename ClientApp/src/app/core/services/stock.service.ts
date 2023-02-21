import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StockDataValue } from '../models/stock-data-value.model';
import { StockData } from '../models/stock-data.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  public getStocks() : Observable<StockData[]> {
    return this.http.get<StockData[]>(`${this.baseUrl}api/stocks`);
  }

  public getStock(id: number) : Observable<StockData> {
    return this.http.get<StockData>(`${this.baseUrl}api/stocks/${id}`);
  }

  public getStockValues(id: number) : Observable<StockDataValue[]> {
    return this.http.get<StockDataValue[]>(`${this.baseUrl}api/stock-values/${id}`);
  }
}
