import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private url: string = "http://localhost:8080/orders";

  constructor(
    private httpClient: HttpClient
  ) { }

  public findAll(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(`${this.url}/`);
  }

  public findById(id: number): Observable<Order> {
    return this.httpClient.get<Order>(`${this.url}/${id}`);
  }

  public save(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(`${this.url}/`, order);
  }

  public update(order: Order): Observable<Order> {
    return this.httpClient.put<Order>(`${this.url}/${order.id}`, order);
  }

  public deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
}
