import { Component, OnInit } from '@angular/core';
import { Cripto } from '../../interfaces/cripto.interface';
import { CriptoService } from '../../services/cripto.service';


@Component({
  selector: 'app-por-precio',
  templateUrl: './por-precio.component.html',
  styles: [
  ]
})
export class PorPrecioComponent {

  
  termino: string = "Bitcoin, Ethereum"
  errorTrue : boolean = false;
  criptos : Cripto[] = [];
  

  buscar(termino: string){
    this.errorTrue = false;
    this.termino = termino;
    
    this.CriptoService.buscarExchange(this.termino)
      .subscribe((cripto) =>{
        if(cripto.length < 1){
          console.log('No se ha encontrado ninguna moneda con ese nombre')
          this.errorTrue = true;
        }else{
          this.errorTrue = false;
          this.criptos = cripto;
          console.log(cripto); 
        }              
      }, (err)=>{
        this.errorTrue = true;
        console.log('error de peticion')
        this.criptos = [];
      })

  }

 
  

  constructor(private CriptoService: CriptoService) { }
}
