import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exchanges } from '../interfaces/exchanges.interface';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  private apiUrl:string ="https://api.coingecko.com/api/v3/"

  constructor( private http: HttpClient) { }
      

    buscarExchange(termino:string): Observable<Exchanges[]>{
      const url = `${this.apiUrl}exchanges?per_page=50`
      return this.http.get<Exchanges[]>(url);

    }
}
