import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CriptoService {
  

  private apiUrl:string ="https://api.coingecko.com/api/v3/"

  constructor( private http: HttpClient) { }
      
    buscarMoneda ( termino:string): Observable<any>{
      
      const url = `${this.apiUrl}/coins/markets?vs_currency=usd&ids=${termino.toLowerCase()}&order=market_cap_desc&per_page=50&page=1&sparkline=false`          
      return this.http.get(url)
      .pipe(
        catchError(err => of(['No se ha encontrado ninguna coincidencia']))
      )
      
    }
  
}
