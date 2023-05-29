import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { Photo } from '../model/photo';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string = "http://localhost:8080/products";

  constructor(
    private httpClient: HttpClient
  ) { }

  public findAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.url}/`);
  }

  public findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.url}/${id}`);
  }

  public save(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(`${this.url}/`, product);
  }

  public updateProduct(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.url}/${product.id}`, product);
  }

  public savePhoto(file: File): Observable<Photo> {
    const formData = new FormData();
    formData.append('file', file);
    return this.httpClient.post<Photo>(`${this.url}/upload`, formData);
  }

  public deletePhoto(photo: Photo, product: Product): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/delete/${photo.publicId}/${product.id}`);
  }

  /*
  public updateWithPhotos(product: Product, photos: File[]): Observable<Product> {
    const formData = new FormData();
    formData.append('archivo', archivo);
    formData.append('nombre', alumno.nombre);
    formData.append('apellido', alumno.apellido);
    formData.append('email', alumno.email);
    return this.http.put<Alumno>(`${this.baseEndpoint}/editar-con-foto/${product.id}`, formData);
  }
  */

  /*
   public update(order: Product): Observable<Product> {
     return this.httpClient.put<Product>(`${this.url}/${order.id}`, order);
   }
 
   public deleteById(id: number): Observable<void> {
     return this.httpClient.delete<void>(`${this.url}/${id}`);
   }
    */
}
