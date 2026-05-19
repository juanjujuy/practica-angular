import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoriaAlumno, Cursos, Inscripcion } from '../../models/punto4/inscripcion';
import { Inscripcion as InscripcionService } from '../../services/punto4/inscripcion';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-inscripcion',
  imports: [FormsModule, CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './form-inscripcion.html',
  styleUrl: './form-inscripcion.css',
})
export class FormInscripcion implements OnInit {

  @ViewChild('formInscripcion') formInscripcion: any;

  formEnviado = false;
  CategoriaAlumno = CategoriaAlumno;

  categorias = Object.keys(CategoriaAlumno)
    .filter(key => isNaN(Number(key))) as Array<keyof typeof CategoriaAlumno>;

  Cursos = Cursos;

  cursos = Object.keys(Cursos)
    .filter(key => isNaN(Number(key))) as Array<keyof typeof Cursos>;

  inscripciones: Array<Inscripcion>;

  constructor(private inscripcionService: InscripcionService, 
    private routerActive: ActivatedRoute,
    private router: Router) {
    this.inscripciones = new Array<Inscripcion>();

  }
  accion = "";

  ngOnInit(): void {
    this.inscripciones = this.inscripcionService.getInscripciones();

    this.routerActive.params.subscribe (params => {
      let id = params['id'];
      if (id == 0) {
        this.accion="Agregar";
      }
      else {
        this.accion="Editar";
      }
    })

  }

  formularioInscripcion: Inscripcion = this.getInscripcionVacia();

  getInscripcionById(id: number): Inscripcion | undefined {
    const inscripcionEncontrada = this.inscripcionService.getInscripcionById(id);
    if (inscripcionEncontrada) {
      this.formularioInscripcion = { ...inscripcionEncontrada };
    }
    return inscripcionEncontrada;
  }

  getInscripcionVacia(): Inscripcion {
    return {
      id: null,
      dni: null,
      precio: null,
      categoriaAlumno: null,
      fechaInscripcion: null,
      email: '',
      curso: null,
      pagoTotal: null,
    };
  }

  agregarInscripcion() {
    
    this.formEnviado=true;
    if (this.formInscripcion.invalid) {
      return;
    }
    this.inscripcionService.addInscripcion(this.formularioInscripcion);
    this.formularioInscripcion = this.getInscripcionVacia();
    //reset estado del submit para que no muestre error apenas se muestra el formulario
    this.formEnviado=false;
    //resetea las propiedades de validaciones del form de Angular
    this.formInscripcion.resetForm();
    this.router.navigate(['/punto4'])
  }

  calcularPago() {
    this.formularioInscripcion.pagoTotal = this.inscripcionService.calcularPago(this.formularioInscripcion);
  }
}


