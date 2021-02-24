import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cripto } from '../../interfaces/cripto.interface';
import { CriptoService } from '../../services/cripto.service';

import {switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-ver-moneda',
  templateUrl: './ver-moneda.component.html',
  styles: [
  ]
})
export class VerMonedaComponent implements OnInit {

  @Input() criptos: Cripto[] = [];
  
  cripto!: Cripto;

  constructor(private rutaActivada: ActivatedRoute,
    private criptoService: CriptoService) { }

//NO TORNA EL VALOR DEL ID QUE VULL, no he conseguit solucionar-ho com toca, és cosa de manejar-se bé amb l'API

  ngOnInit(): void {

//UTILITZE ELS OPERADORS DE RXJS PER A FER LA PETICIÓ D'UN ALTRA MANERA, NO AMB SUBSCRIBE
    this.rutaActivada.params
    .pipe(switchMap(({id})=>this.criptoService.getMonedaPorId(id) ),
    tap(console.log)
    )
    /* subscribe(({id}) =>{
      console.log(id)

      this.criptoService.getMonedaPorId(id)
      .subscribe((cripto) =>{
        console.log(cripto);
      } )
   
    } ) */
  }

}
