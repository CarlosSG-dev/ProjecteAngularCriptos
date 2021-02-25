import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorPrecioComponent } from './pages/por-precio/por-precio.component';
import { PorRankingComponent } from './pages/por-ranking/por-ranking.component';
import { PorCapitalizacionComponent } from './pages/por-capitalizacion/por-capitalizacion.component';
import { VerMonedaComponent } from './pages/ver-moneda/ver-moneda.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CriptoTablaComponent } from './components/cripto-tabla/cripto-tabla.component';
import { CriptoInputComponent } from './components/cripto-input/cripto-input.component';
import { CriptoExchangesComponent } from './components/cripto-exchanges/cripto-exchanges.component';
import { ExchangeInputComponent } from './components/exchange-input/exchange-input.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { CustomMinDirective } from './pages/formulario/directives/custom-min.directive';



@NgModule({
  declarations: [PorPrecioComponent, PorRankingComponent, PorCapitalizacionComponent, VerMonedaComponent, CriptoTablaComponent, CriptoInputComponent, CriptoExchangesComponent, ExchangeInputComponent, FormularioComponent,  CustomMinDirective],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    
    
  ],
  exports: [
    PorPrecioComponent, 
    PorRankingComponent,
    PorCapitalizacionComponent,
     VerMonedaComponent,
     FormularioComponent
  ]
})
export class CriptoModule { }
