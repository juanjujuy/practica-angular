import { Injectable } from '@angular/core';
import { Inscripcion as inscripcion, CategoriaAlumno} from '../../models/punto4/inscripcion';
import { FetchBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Incripcion {
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
        curso: 0,
        pagoTotal: 650
      }

    ]
  }
  
  calcularPago(precio:number, categoriaAlumno: CategoriaAlumno ) : number {
    if(categoriaAlumno === CategoriaAlumno.estudiante) {
      return precio * 0.65
    }
    if (categoriaAlumno === CategoriaAlumno.egresado) {
      return precio*0.5
    }
    if (categoriaAlumno === CategoriaAlumno.particular) {
      return precio
    }
    return 0;
  }
}
