import { Component, Input, OnInit } from '@angular/core';
import { Exchanges } from '../../interfaces/exchanges.interface';

@Component({
  selector: 'app-cripto-exchanges',
  templateUrl: './cripto-exchanges.component.html',
  styles: [
  ]
})
export class CriptoExchangesComponent implements OnInit {

 
  @Input() exchanges: Exchanges[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
