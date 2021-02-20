import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorPrecioComponent } from './pages/por-precio/por-precio.component';
import { PorRankingComponent } from './pages/por-ranking/por-ranking.component';
import { PorCapitalizacionComponent } from './pages/por-capitalizacion/por-capitalizacion.component';
import { VerMonedaComponent } from './pages/ver-moneda/ver-moneda.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PorPrecioComponent, PorRankingComponent, PorCapitalizacionComponent, VerMonedaComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PorPrecioComponent, 
    PorRankingComponent,
    PorCapitalizacionComponent,
     VerMonedaComponent
  ]
})
export class CriptoModule { }
