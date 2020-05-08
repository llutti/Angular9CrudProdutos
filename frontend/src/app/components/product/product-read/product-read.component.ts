import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent implements OnInit
{

  public products: Product[];
  public displayedColumns: string[] = ['id', 'name', 'price', 'action'];

  constructor(private productoService: ProductService) { }

  ngOnInit(): void
  {
    this.productoService
      .read()
      .pipe(take(1))
      .subscribe((products) => this.products = products)
  }

}
