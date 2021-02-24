import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorPrecioComponent } from './pages/por-precio/por-precio.component';
import { PorRankingComponent } from './pages/por-ranking/por-ranking.component';
import { PorCapitalizacionComponent } from './pages/por-capitalizacion/por-capitalizacion.component';
import { VerMonedaComponent } from './pages/ver-moneda/ver-moneda.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CriptoTablaComponent } from './components/cripto-tabla/cripto-tabla.component';
import { CriptoInputComponent } from './components/cripto-input/cripto-input.component';



@NgModule({
  declarations: [PorPrecioComponent, PorRankingComponent, PorCapitalizacionComponent, VerMonedaComponent, CriptoTablaComponent, CriptoInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    PorPrecioComponent, 
    PorRankingComponent,
    PorCapitalizacionComponent,
     VerMonedaComponent
  ]
})
export class CriptoModule { }
