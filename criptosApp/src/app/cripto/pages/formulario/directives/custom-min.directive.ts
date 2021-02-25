import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appCustomMin]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CustomMinDirective,
    multi: true
}]
})
export class CustomMinDirective {

  @Input() minimo!: number;
  
  constructor() { }

  validate( control: FormControl ) {
    const inputValue = control.value;
    return ( inputValue < this.minimo )
            ? { 'customMin': true }
            : null;
}

}
