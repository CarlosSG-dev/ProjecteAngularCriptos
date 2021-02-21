import { Component, OnInit } from '@angular/core';
import { CriptoService } from '../../services/cripto.service';

@Component({
  selector: 'app-por-ranking',
  templateUrl: './por-ranking.component.html',
  styles: [
  ]
})
export class PorRankingComponent{

  termino: string = "Hola Mundo"
  errorTrue : boolean = false;
  

  buscar(){
    this.errorTrue = false;
    console.log(this.termino);
    
    this.CriptoService.buscarMoneda(this.termino)
      .subscribe((resp) =>{
        
        console.log(resp);       
      }, (err)=>{
        this.errorTrue = true;
        console.log('error de peticion')
      })

  }
  

  constructor(private CriptoService: CriptoService) { }

 

}
