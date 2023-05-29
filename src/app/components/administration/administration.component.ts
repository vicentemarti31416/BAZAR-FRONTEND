import { Product } from './../../shared/model/product';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from 'src/app/shared/model/photo';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  productForm: FormGroup = this.initForm();
  product: Product = new Product();
  file: File;
  photos: Photo[] = [];

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      let id: number = +paramMap.get('id');
      if (id) {
        this.productService.findById(id).subscribe((response) => {
          this.product = response;
          console.log(this.product);
        })
      }
    })
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: [''],
      description: [''],
      price: [''],
      iva: [''],
      quantity: [''],
      photos: this.fb.array([])
    });
  }

  onFileChange(event) {
    this.file = event.target.files[0];
    this.addPhoto();
  }

  addPhoto() {
    this.productService.savePhoto(this.file).subscribe((response) => {
      const photo = response as Photo;
      this.photos.push(photo);
      (this.productForm.get('photos') as FormArray).push(this.fb.control(photo));
    })
  }
  
  deletePhoto(photo: Photo, product: Product) {
    this.photos = this.photos.filter((photoFilter) => photoFilter !== photo);
    const photosFormArray = this.productForm.get('photos') as FormArray;
    const index = photosFormArray.value.findIndex((photoForm) => photoForm === photo);
    if (index !== -1) {
      photosFormArray.removeAt(index);
    }
    this.productService.deletePhoto(photo, product).subscribe((response) => {
      console.log("deleted");
    })
  }

  saveProduct(productForm) {
    this.product.photos = this.photos;
    this.productService.save(productForm.value).subscribe((response) => {
      this.product = response as Product;
      console.log("save response = " + JSON.stringify(response));
    })
  }

  updateProduct(productForm) {
    this.product.photos = this.photos;
    this.productService.updateProduct(this.product).subscribe((response) => {
      this.product = response as Product;
      console.log("update response = " + JSON.stringify(response));
    })
  }

}
