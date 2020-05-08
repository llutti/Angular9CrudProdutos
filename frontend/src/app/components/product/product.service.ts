import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService
{
  private readonly baseUrl: string = 'http://localhost:3001/products';

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient) { }

  public showMessage(msg: string)
  {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  public create(product: Product): Observable<Product>
  {
    return this.http.post<Product>(this.baseUrl, product);
  }

  public read():Observable<Product[]>
  {
    return this.http.get<Product[]>(this.baseUrl);
  }
}
