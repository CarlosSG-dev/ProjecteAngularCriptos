import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePersonalizadaMayus'
})
export class PipePersonalizadaMayusPipe implements PipeTransform {

  transform(value: string, enMayus: boolean = true): string {    
    return (enMayus) ? value.toUpperCase() : value.toLowerCase();
   
    
  }

}
