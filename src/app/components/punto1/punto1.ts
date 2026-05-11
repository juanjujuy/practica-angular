import { Component } from '@angular/core';

@Component({
  selector: 'app-punto1',
  imports: [],
  templateUrl: './punto1.html',
  styleUrl: './punto1.css',
})
export class Punto1 {

  puntero = 0;
  eventos: Array<any> = [
    {
      nombre: 'Panaderia y Reposteria',
      descripcion: 'Aprendé a elaborar panes caseros, masas y recetas tradicionales desde cero, con técnicas prácticas para lograr productos esponjosos y sabrosos.', 
      img: "./assets/images/punto1/evento1.jpg"
    },
    {
      nombre: 'Curso de Tango', 
      descripcion: 'Descubrí el ritmo y la pasión del tango, aprendiendo pasos básicos y avanzados para bailar con estilo y confianza.', 
      img: "./assets/images/punto1/evento2.jpg"
    },
    {
      nombre: 'Corte y Confeccion', 
      descripcion: 'Aprendé a diseñar, cortar y confeccionar prendas, dominando técnicas esenciales de costura para crear tu propia ropa.', 
      img: "./assets/images/punto1/evento3.jpg"
    }
  ]

  siguienteEvento() {
    if (this.puntero < this.eventos.length - 1) {
      this.puntero++;
    } else {
      this.puntero = 0;
    }
  }

  anteriorEvento() {
    if (this.puntero > 0) {
      this.puntero--;
    } else {
      this.puntero = this.eventos.length - 1;
    }
  }
}
