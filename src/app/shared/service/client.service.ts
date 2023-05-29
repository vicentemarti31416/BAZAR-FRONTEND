import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../model/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url: string = "http://localhost:8080/clients";

  constructor(
    private httpClient: HttpClient
  ) { }

  public findAll(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(`${this.url}/`);
  }

  public findById(id: number): Observable<Client> {
    return this.httpClient.get<Client>(`${this.url}/${id}`);
  }

  public save(order: Client): Observable<Client> {
    return this.httpClient.post<Client>(`${this.url}/`, order);
  }

  public update(order: Client): Observable<Client> {
    return this.httpClient.put<Client>(`${this.url}/${order.id}`, order);
  }

  public deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
}
