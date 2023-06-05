import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../model/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private url: string = "http://localhost:8080/products"

  constructor(
    private httpClient: HttpClient
  ) { }

  public findIsPrincipal(): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(`${this.url}/principal`);
  }

}
