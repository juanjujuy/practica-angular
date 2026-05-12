import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoriaAlumno, Cursos, Inscripcion } from '../../models/punto4/inscripcion';
import { Inscripcion as InscripcionService } from '../../services/punto4/inscripcion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-punto4',
  imports: [FormsModule, CommonModule],
  templateUrl: './punto4.html',
  styleUrl: './punto4.css',
})
export class Punto4 implements OnInit {

  CategoriaAlumno = CategoriaAlumno;

  categorias = Object.keys(CategoriaAlumno)
    .filter(key => isNaN(Number(key))) as Array<keyof typeof CategoriaAlumno>;

  Cursos = Cursos;
  cursos = Object.keys(Cursos)
    .filter(key => isNaN(Number(key))) as Array<keyof typeof Cursos>;

  inscripciones: Array<Inscripcion>;

  constructor(private inscripcionService: InscripcionService, private router: Router) {
    this.inscripciones = new Array<Inscripcion>();

    this.inscripciones = this.inscripcionService.getInscripciones();
  }

  filtroCategoria: CategoriaAlumno | null = null;

  formularioInscripcion: Inscripcion = this.getInscripcionVacia();

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

  ngOnInit(): void {

  }

  agregarIncripcion() {
    this.formularioInscripcion.fechaInscripcion = new Date()
    this.inscripcionService.addInscripcion(this.formularioInscripcion);
    this.formularioInscripcion = this.getInscripcionVacia();
  }

  eliminarInscripcion(inscripcion: Inscripcion) {
    this.inscripcionService.deleteInscripcion(inscripcion);
  }

  editarInscripcion(inscripcion: Inscripcion) {
    this.inscripcionService.updateInscripcion(inscripcion);
  }

  limpiarFormulario() {
    this.formularioInscripcion = this.getInscripcionVacia();
  }

  calcularPago() {
    if (
      this.formularioInscripcion.precio !== null &&
      this.formularioInscripcion.categoriaAlumno !== null) {
      if (this.formularioInscripcion.categoriaAlumno === CategoriaAlumno.estudiante) {
        this.formularioInscripcion.pagoTotal = this.formularioInscripcion.precio * 0.65;
      }
      if (this.formularioInscripcion.categoriaAlumno === CategoriaAlumno.egresado) {
        this.formularioInscripcion.pagoTotal = this.formularioInscripcion.precio * 0.5;
      }
      if (this.formularioInscripcion.categoriaAlumno === CategoriaAlumno.particular) {
        this.formularioInscripcion.pagoTotal = this.formularioInscripcion.precio;
      }
    }
    else {
      this.formularioInscripcion.pagoTotal = 0;
    }
  }

  get getResumen() {
    return {
      Estudiante: this.inscripciones.filter((e) => Number(e.categoriaAlumno) === 1).length,
      Egresado: this.inscripciones.filter((e) => Number(e.categoriaAlumno) === 2).length,
      Particular: this.inscripciones.filter((e) => Number(e.categoriaAlumno) === 3).length,
      totalPagado: this.inscripciones.reduce(
        (acumulador, inscripcion) => {
          if (inscripcion.pagoTotal !== null) {
            return acumulador + inscripcion.pagoTotal;
          }
          return acumulador;
        },
        0,
      ),
    };
  }

  getInscripcionesFiltradas(): Inscripcion[] {
    if (this.filtroCategoria === null) {
      return this.inscripciones;
    } else {
      return this.inscripciones.filter((ins) =>
        ins.categoriaAlumno === this.filtroCategoria);
    }
  }

  getCantidadFiltrada(): number {

    return this.getInscripcionesFiltradas().length;

  }

  getTotalFiltrado(): number {

    return this.getInscripcionesFiltradas()
      .reduce(
        (total, ins) => total + (ins.pagoTotal ?? 0),
        0
      );

  }
}
