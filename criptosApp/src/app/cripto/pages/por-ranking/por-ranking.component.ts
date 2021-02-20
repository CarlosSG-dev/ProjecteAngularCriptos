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
  

  buscar(){
    console.log(this.termino);
    
    this.CriptoService.buscarMoneda(this.termino)
      .subscribe(resp =>{
        console.log(resp);
      })

  }

  constructor(private CriptoService: CriptoService) { }

 

}
