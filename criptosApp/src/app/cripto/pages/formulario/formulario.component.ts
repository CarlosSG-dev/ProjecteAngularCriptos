import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [
  ]
})
export class FormularioComponent {

  persona = {
    genero: 'F',
    notificaciones: true,
  }

  terminosYCondiciones: boolean = false;


  //Formulario Reactivo

  miFormulario2: FormGroup = this.fb.group({
    nombre: [ , [ Validators.required, Validators.minLength(3) ]   ],
    precio: [ , [ Validators.required, Validators.min(0)] ],
    cantidad: [ , [ Validators.required, Validators.min(0)] ],
  })

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.miFormulario2.reset({
      nombre: 'Bitcoin',
      precio: 50000,
      existencias: 18000000
    })
  }


  campoEsValido( campo: string ) {

    return this.miFormulario2.controls[campo].errors 
            && this.miFormulario2.controls[campo].touched;
  }

  guardar() {

    if ( this.miFormulario2.invalid )  {
      this.miFormulario2.markAllAsTouched();
      return;
    }


    console.log(this.miFormulario2.value);
    this.miFormulario2.reset();
  }




}
