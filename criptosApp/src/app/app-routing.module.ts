import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PorPrecioComponent } from './cripto/pages/por-precio/por-precio.component';
import { PorRankingComponent } from './cripto/pages/por-ranking/por-ranking.component';
import { VerMonedaComponent } from './cripto/pages/ver-moneda/ver-moneda.component';
import { FormularioComponent } from './cripto/pages/formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './cripto/components/login/login.component';

const routes: Routes = [{
  path: '',
  component: PorRankingComponent,
  pathMatch: 'full'
},
{
  path:'exchange',
  component: PorPrecioComponent,
  pathMatch: 'full'
},
{
  path:'login',
  component: LoginComponent,
  pathMatch: 'full'
},
{
  path:'formulario',
  component: FormularioComponent,
  pathMatch: 'full'
},
{
  path:'moneda/:id',
  component: VerMonedaComponent,
  pathMatch: 'full'
},{
  path:'**',
  redirectTo: ''
}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
    
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
