export class Inscripcion {
    id: number | null;
    dni: number | null;
    precio: number | null;
    categoriaAlumno: CategoriaAlumno | null;
    fechaInscripcion: Date | null;
    email: string;
    curso: Cursos | null;
    pagoTotal: number | null;

    constructor(id: number, dni: number, precio: number, categoriaAlumno: CategoriaAlumno, 
        fechaInscripcion: Date, email: string, curso: Cursos, pagoTotal: number) {
        this.id = id;
        this.dni = dni;
        this.precio = precio;
        this.categoriaAlumno = categoriaAlumno;
        this.fechaInscripcion = fechaInscripcion;
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