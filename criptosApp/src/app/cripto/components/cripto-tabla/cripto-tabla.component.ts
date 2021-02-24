import { Component, Input, OnInit } from '@angular/core';
import { Cripto } from '../../interfaces/cripto.interface';

@Component({
  selector: 'app-cripto-tabla',
  templateUrl: './cripto-tabla.component.html',
  styles: [
  ]
})
export class CriptoTablaComponent implements OnInit {

  @Input() criptos: Cripto[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
