import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Item, Product } from '../models/product.interface';

@Injectable()
export class StockInventoryService {

  constructor(
    private http: HttpClient
  ) { }

  getCartItems(): Observable<Item[]> {
    return this.http
      .get("/api/cart")
      .pipe(
        map((response: Item[]) => response),
        catchError((error: any) => throwError(error))
      )
  }

  getProducts(): Observable<Product[]> {
    return this.http
      .get("/api/products")
      .pipe(
        map((response: Product[]) => response),
        catchError((error: any) => throwError(error))
      )
  }

  checkBranchId(id: string): Observable<any> {
    return this.http
      .get("/api/branches", { params: { id } });
  }

}