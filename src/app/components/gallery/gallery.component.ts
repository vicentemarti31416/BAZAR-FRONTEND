import { ProductService } from 'src/app/shared/service/product.service';
import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/shared/model/photo';
import { Product } from 'src/app/shared/model/product';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  productsWithColors: Product[] = [];
  productsWithoutColors: Product[] = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.findAll().subscribe(([productsWithoutColors, productsWithColors]) => {
      this.productsWithoutColors = productsWithoutColors;
      this.productsWithColors = this.orderedByColor(productsWithColors);
      this.productsWithColors = this.orderedByCode(productsWithColors);
    })
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

  orderedByCode(products: Product[]): Product[] {
    return products.sort(function (a, b) {
      if (a.colorCode > b.colorCode) {
        return 1;
      }
      if (a.colorCode < b.colorCode) {
        return -1;
      }
      return 0;
    })
  }

}


