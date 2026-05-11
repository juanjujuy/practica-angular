import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-punto2',
  imports: [CommonModule],
  templateUrl: './punto2.html',
  styleUrl: './punto2.css',
})
export class Punto2 {

  carrito: Array<any> = [];

  productos: Array<any> = [

    {
      id : 1,
      nombre: "Laptop Lenovo IdeaPad 3",
      descripcion: "Notebook con procesador Ryzen 5, ideal para estudio y trabajo diario.",
      img: "../../../assets/images/punto2/producto1.jpg",
      precio: 799.99,
      carrito: false,
    },
    {
      id : 2,
      nombre: "Monitor Samsung 24\" Full HD",
      descripcion: "Pantalla LED de 24 pulgadas con excelente calidad de imagen.",
      img: "../../../assets/images/punto2/producto2.jpg",
      precio: 489.50,
      carrito: false,
    },
    {
      id : 3,
      nombre: "CPU Gamer Ryzen 7",
      descripcion: "Equipo de alto rendimiento para gaming y tareas exigentes.",
      img: "../../../assets/images/punto2/producto3.jpg",
      precio: 1200.00,
      carrito: false,
    },
    {
      id : 4,
      nombre: "Teclado Mecánico RGB",
      descripcion: "Teclado con iluminación RGB y switches mecánicos de alta precisión.",
      img: "../../../assets/images/punto2/producto4.jpg",
      precio: 89.99,
      carrito: false,
    },
    {
      id : 5,
      nombre: "Mouse Logitech G203",
      descripcion: "Mouse gamer con sensor de alta precisión y diseño ergonómico.",
      img: "../../../assets/images/punto2/producto5.jpg",
      precio: 29.99,
      carrito: false,
    },
    {
      id : 6,
      nombre: "Auriculares HyperX Cloud II",
      descripcion: "Auriculares gamer con sonido envolvente 7.1 y gran comodidad.",
      img: "../../../assets/images/punto2/producto6.jpg",
      precio: 129.99,
      carrito: false,
    }
  ];

  agregarCarrito(producto: any) {
    producto.carrito = !producto.carrito;
    if (producto.carrito) {
      const productoCarrito = {
        ...producto,
        cantidad: 1,
        subtotal: producto.precio,
      };
      this.carrito.push(productoCarrito);
    } else {
      this.carrito = this.carrito.filter((prod) => prod.id !== producto.id);
    }
    console.log(this.carrito);
  }

  calcularTotal() : number {
    let total = 0;
    this.carrito.forEach((prod) => {
      total = total + prod.subtotal;
    })
    return total;
  }

  aumentar(producto : any) {
    producto.cantidad++;
    this.calcularSubtotal(producto)
  }

  disminuir(producto: any) {
    if (producto.cantidad > 1) {
      producto.cantidad--;
      this.calcularSubtotal(producto)
    }
  }

  calcularSubtotal (producto: any) : void {
    producto.subtotal =producto.precio * producto.cantidad;
  }

}
