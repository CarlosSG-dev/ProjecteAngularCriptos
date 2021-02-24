import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-cripto-input',
  templateUrl: './cripto-input.component.html',
  styles: [
  ]
})
export class CriptoInputComponent implements OnInit {
  

  @Output() onEnter : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  //@Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

   termino: string = '';
   
   ngOnInit() {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(valor =>{
      this.onDebounce.emit(valor);
    });
  }

   buscar(){
      this.onEnter.emit(this.termino);
   }

   teclaPulsada(){
     this.debouncer.next(this.termino);
   }

}
