import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './footer/footer/footer.component';




@NgModule({
  declarations: [SidebarComponent, FooterComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    SidebarComponent,
    FooterComponent

  ]
})
export class SharedModule { }
