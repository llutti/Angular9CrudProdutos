import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductReadDemoDataSource, ProductReadDemoItem } from './product-read-demo-datasource';
import { HeaderService } from '../../templates/header/header.service';

@Component({
  selector: 'app-product-read-demo',
  templateUrl: './product-read-demo.component.html',
  styleUrls: ['./product-read-demo.component.scss']
})
export class ProductReadDemoComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ProductReadDemoItem>;
  dataSource: ProductReadDemoDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(private headerService: HeaderService)
  {
    headerService.headerData = {
      title: 'Lista de Produtos (Demo)',
      icon: 'store',
      routeUrl: '/products/demo'
    }
  }

  ngOnInit() {
    this.dataSource = new ProductReadDemoDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
