import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { OrderService } from './../../shared/service/order.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/model/product';
import { ProductService } from 'src/app/shared/service/product.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  product: Product = new Product();
  productsByColor: Product[] = [];
  constructor(
    private orderService: OrderService,
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.activatedRoute.paramMap.subscribe((paramMap => {
      const id: string = paramMap.get('id');
      this.productService.findById(id).subscribe((product) => {
        this.product = product;
        this.productService.findByColorCode(product.colorCode).subscribe((products) => { 
          this.productsByColor = this.orderedByColor(products);
        });
      });
    }))
  }

  orderedByColor(products: Product[]): Product[] {
    return products.sort(function (a, b) {
      if (a.colorRgb > b.colorRgb) {
        return 1;
      }
      if (a.colorRgb < b.colorRgb) {
        return -1;
      }
      return 0;
    });
  }

}
