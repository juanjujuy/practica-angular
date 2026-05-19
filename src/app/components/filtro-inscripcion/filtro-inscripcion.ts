import { Component, OnInit } from '@angular/core';
import { CategoriaAlumno, Cursos, Inscripcion } from '../../models/punto4/inscripcion';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';
import { Inscripcion as InscripcionService } from '../../services/punto4/inscripcion';

@Component({
  selector: 'app-filtro-inscripcion',
  imports: [FormsModule,CommonModule],
  templateUrl: './filtro-inscripcion.html',
  styleUrl: './filtro-inscripcion.css',
})
export class FiltroInscripcion implements OnInit{
  filtroCategoria: CategoriaAlumno | null = null;

  CategoriaAlumno = CategoriaAlumno;
  categorias = Object.keys(CategoriaAlumno)
    .filter(key => isNaN(Number(key))) as Array<keyof typeof CategoriaAlumno>;

    Cursos = Cursos;
    cursos = Object.keys(Cursos)
        .filter(key => isNaN(Number(key))) as Array<keyof typeof Cursos>;
    
  inscripciones :Array<Inscripcion>;
    constructor(private inscripcionService: InscripcionService, private router: Router) {
      this.inscripciones = new Array<Inscripcion>();

    }

    ngOnInit(): void {
      this.inscripciones = this.inscripcionService.getInscripciones();
    }

    getResumen() {
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
