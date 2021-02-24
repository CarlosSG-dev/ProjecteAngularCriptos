import { Component, OnInit } from '@angular/core';
import { Cripto } from '../../interfaces/cripto.interface';
import { CriptoService } from '../../services/cripto.service';

@Component({
  selector: 'app-por-ranking',
  templateUrl: './por-ranking.component.html',
  styles: [
  ]
})
export class PorRankingComponent{

  termino: string = "Bitcoin, Ethereum"
  errorTrue : boolean = false;
  criptos : Cripto[] = [];
  

  buscar(termino: string){
    this.errorTrue = false;
    this.termino = termino;
    
    this.CriptoService.buscarMoneda(this.termino)
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

  sugerencias(termino:string){
    this.errorTrue = false;
  }
  

  constructor(private CriptoService: CriptoService) { }

 

}
