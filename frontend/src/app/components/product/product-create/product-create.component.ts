import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit
{
  public product: Product = {
    name: '',
    price: null
  }

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void
  {
  }

  createProduct(): void
  {
    this.productService
      .create(this.product)
      .pipe(take(1))
      .subscribe(
        () =>
        {
          this.productService
            .showMessage('Produto Criado com Sucesso!!!');
          this.router.navigate(['/products']);
        }
      );
  }

  cancel(): void
  {
    this.router.navigate(['/products']);
  }

}
