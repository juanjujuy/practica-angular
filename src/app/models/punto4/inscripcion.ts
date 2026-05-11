export class Inscripcion {
    dni: number;
    precio: number;
    categoriaAlumno: CategoriaAlumno;
    fechaIncripcion: Date;
    email: string;
    curso: Cursos;
    pagoTotal: number;

    constructor (dni: number, precio: number, categoriaAlumno: CategoriaAlumno, fechaInscripcion: Date, email: string, curso: Cursos, pagoTotal: number) {
        this.dni = dni;
        this.precio = precio;
        this.categoriaAlumno = categoriaAlumno;
        this.fechaIncripcion = fechaInscripcion;
        this.email = email;
        this.curso = curso;
        this.pagoTotal = pagoTotal;
    }

}

export enum CategoriaAlumno {
    estudiante,
    egresado,
    particular
}

export enum Cursos {
    angular,
    javascript,
    java,
    python,
    react
}