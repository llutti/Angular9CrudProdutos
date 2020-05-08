import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable, EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService
{
  private readonly baseUrl: string = 'http://localhost:3001/products';

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient) { }

  public showMessage(msg: string, isError: boolean = false)
  {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  private errorHandler(e: any): Observable<any>
  {
    this.showMessage('Ocorreu um erro!', true);
    console.log('Ocorreu um erro', e);
    return EMPTY;
  }

  public create(product: Product): Observable<Product>
  {
    return this.http
      .post<Product>(this.baseUrl, product)
      .pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e))
      );
  }

  public read(): Observable<Product[]>
  {
    return this.http
      .get<Product[]>(this.baseUrl)
      .pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e))
      );

  }

  public readById(id: number): Observable<Product>
  {
    const url = `${this.baseUrl}/${id}`;

    return this.http
      .get<Product>(url)
      .pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e))
      );
  }

  public update(product: Product): Observable<Product>
  {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http
      .put<Product>(url, product)
      .pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e))
      );
  }

  public delete(id: number): Observable<Product>
  {
    const url = `${this.baseUrl}/${id}`;
    return this.http
      .delete<Product>(url)
      .pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e))
      );
  }

}
