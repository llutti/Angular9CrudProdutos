import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit
{

  public product: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void
  {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService
      .readById(id)
      .pipe(take(1))
      .subscribe(
        product =>
        {
          this.product = product;
        }
      )
  }

  deleteProduct(): void
  {
    this.productService
      .delete(this.product.id)
      .pipe(take(1))
      .subscribe(
        () =>
        {
          this.productService
            .showMessage('Produto Apagado com Sucesso!!!');
          this.voltarListaProduto();
        }
      );
  }

  voltarListaProduto(): void
  {
    this.router.navigate(['/products']);
  }

}
