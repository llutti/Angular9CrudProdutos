import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit
{

  public product: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void
  {
    const id = this.route.snapshot.paramMap.get('id');
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

  updateProduct(): void
  {
    this.productService
      .update(this.product)
      .pipe(take(1))
      .subscribe(
        () =>
        {
          this.productService
            .showMessage('Produto Alterado com Sucesso!!!');
          this.voltarListaProduto();
        }
      );
  }

  voltarListaProduto(): void
  {
    this.router.navigate(['/products']);
  }

}
