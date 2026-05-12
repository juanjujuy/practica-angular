import { Injectable } from '@angular/core';
import { Inscripcion as inscripcion, CategoriaAlumno, Cursos} from '../../models/punto4/inscripcion';
import { FetchBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Inscripcion {
  private inscripciones: Array<any>;

  constructor() {
    this.inscripciones = new Array<inscripcion>();

    this.inscripciones = [
      {
        id: 1,
        dni: 12345678,
        precio: 1000,
        categoriaAlumno: CategoriaAlumno.estudiante,
        fechaInscripcion: "2024-03-15",
        email: "alumno1@gmail.com",
        curso: Cursos.angular,
        pagoTotal: 650
      },
      {
        id: 2,
        dni: 87654321,
        precio: 1500,
        categoriaAlumno: CategoriaAlumno.egresado,
        fechaInscripcion: "2024-03-16",
        email: "egresado1@gmail.com",
        curso: Cursos.react,
        pagoTotal: 750
      },
      {
        id: 3,
        dni: 11223344,
        precio: 2000,
        categoriaAlumno: CategoriaAlumno.particular,
        fechaInscripcion: "2024-03-17",
        email: "particular1@gmail.com",
        curso: Cursos.python,
        pagoTotal: 2000
      },
      {
        id: 4,
        dni: 44332211,
        precio: 1200,
        categoriaAlumno: CategoriaAlumno.egresado,
        fechaInscripcion: "2024-03-18",
        email: "egresado2@gmail.com",
        curso: Cursos.java,
        pagoTotal: 600
      }
    ]
  }

  getInscripciones() {
    return this.inscripciones;
  }

  addInscripcion(inscripcion: inscripcion) {
    inscripcion.id = this.getIdDisponible();
    this.inscripciones.push(inscripcion);
  }

  getInscripcionById(id: number): inscripcion | undefined {
    return this.inscripciones.find((ins) => ins.id === id);
  }

  updateInscripcion(updatedInscripcion: inscripcion): boolean {
    const index = this.inscripciones.findIndex((ins) => ins.id === updatedInscripcion.id);
    if (index !== -1) {
      this.inscripciones[index] = updatedInscripcion;
      return true;
    }
    return false;
  }

  deleteInscripcion(inscripcion: inscripcion): boolean {
    const index = this.inscripciones.findIndex((ins) => ins.id === inscripcion.id);
    if (index !== -1) {
      this.inscripciones.splice(index, 1);
      return true;
    }
    return false;
  }

  getIdDisponible(): number {
    var maxId = 0;
    this.inscripciones.forEach((ins) => {
      if (maxId<ins.id) {
        maxId=ins.id;

      }
    })
    return maxId + 1;
  }


}
 

