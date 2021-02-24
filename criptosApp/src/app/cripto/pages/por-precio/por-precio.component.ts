import { Component, OnInit } from '@angular/core';
import { Cripto } from '../../interfaces/cripto.interface';
import { Exchanges } from '../../interfaces/exchanges.interface';
import { CriptoService } from '../../services/cripto.service';
import { ExchangeService} from '../../services/exchange.service';


@Component({
  selector: 'app-por-precio',
  templateUrl: './por-precio.component.html',
  styles: [
  ]
})
export class PorPrecioComponent {

  
  termino: string = "Binance"
  errorTrue : boolean = false;
  exchanges: Exchanges[] = [];
  

  buscar(termino: string){
    this.errorTrue = false;
    this.termino = termino;
    
    this.ExchangeService.buscarExchange(this.termino)
      .subscribe((exchange) =>{
        if(exchange.length < 1){
          console.log('No se ha encontrado ningun exchange con ese nombre')
          this.errorTrue = true;
        }else{
          this.errorTrue = false;
          this.exchanges= exchange;        
          console.log(exchange); 
        }              
      }, (err)=>{
        this.errorTrue = true;
        console.log('error de peticion')
        this.exchanges = [];
      })

  }

  sugerencias(termino:string){
    this.errorTrue = false;
  }
 
  

  constructor(private ExchangeService: ExchangeService) { }
}
