import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-punto3',
  imports: [CommonModule],
  templateUrl: './punto3.html',
  styleUrl: './punto3.css',
})
export class Punto3 implements OnInit {

  constructor(private cdr: ChangeDetectorRef) { }
  intentando = false;
  jugando = true;
  pareja: Array<any> = [];
  bloqueado = false;
  intentos: number = 0;
  botonInicio: string = "";
  mensaje: string = "";
  ganador = false;

  cartas: Array<any> = [
    {
      id: 1,
      valor: 1,
      img: "../../../assets/images/Punto3/carta1.png",
      visible: false,
      encontrada: false,
    },
    {
      id: 2,
      valor: 1,
      img: "../../../assets/images/Punto3/carta1.png",
      visible: false,
      encontrada: false,
    },
    {
      id: 3,
      valor: 2,
      img: "../../../assets/images/Punto3/carta2.png",
      visible: false,
      encontrada: false,
    },
    {
      id: 4,
      valor: 2,
      img: "../../../assets/images/Punto3/carta2.png",
      visible: false,
      encontrada: false,
    },
    {
      id: 5,
      valor: 3,
      img: "../../../assets/images/Punto3/carta3.png",
      visible: false,
      encontrada: false,
    },
    {
      id: 6,
      valor: 3,
      img: "../../../assets/images/Punto3/carta3.png",
      visible: false,
      encontrada: false,
    },
    {
      id: 7,
      valor: 4,
      img: "../../../assets/images/Punto3/carta4.png",
      visible: false,
      encontrada: false,
    },
    {
      id: 8,
      valor: 4,
      img: "../../../assets/images/Punto3/carta4.png",
      visible: false,
      encontrada: false,
    },
    {
      id: 9,
      valor: 5,
      img: "../../../assets/images/Punto3/carta5.png",
      visible: false,
      encontrada: false,
    },
    {
      id: 10,
      valor: 5,
      img: "../../../assets/images/Punto3/carta5.png",
      visible: false,
      encontrada: false,
    },
    {
      id: 11,
      valor: 6,
      img: "../../../assets/images/Punto3/carta6.png",
      visible: false,
      encontrada: false,
    },
    {
      id: 12,
      valor: 6,
      img: "../../../assets/images/Punto3/carta6.png",
      visible: false,
      encontrada: false,
    },
  ]

  mostrarCarta(carta: any): void {
    if (this.intentando && !carta.visible && !carta.encontrada && !this.bloqueado) {
      carta.visible = true;
      this.pareja.push(carta);
      if (this.pareja.length === 2) {
        this.intentando = false;
        this.bloqueado = true;
        setTimeout(() => {
          console.log("tiempo");
          this.verificarPareja();
          this.pareja = [];
          this.bloqueado = false;
          this.cdr.detectChanges();
        }, 2000)

        console.log(this.pareja);
      }
    }

  }

  verificarPareja(): void {
    if (this.pareja[0].valor === this.pareja[1].valor) {
      this.cartas.forEach((car) => {
        if (car.id === this.pareja[0].id || car.id === this.pareja[1].id) {
          car.encontrada = true;
        }
      })
      this.mensaje = "Bien hecho!"
    }
    else {
      this.cartas.forEach((car) => {
        if (car.id === this.pareja[0].id || car.id === this.pareja[1].id) {
          car.visible = false;
        }
      })
      this.intentos--;
      this.mensaje = "Concentrate..."
    }
    this.verificarPartida();
  }

  mezclarCartas() {
    this.cartas.forEach((car)=>{
      car.visible= false;
      car.encontrada= false;
    })
    this.cartas.sort(() => Math.random() - 0.5);
  }

  ngOnInit(): void {
    this.jugando = false;
    this.intentando = false;
    this.botonInicio = "Iniciar";
    this.mensaje = "Bienvenido, que tengas suerte!";
  }

  iniciarJuego() {
    this.jugando = true;
    this.intentos = 6;
    this.intentando = false;
    this.mezclarCartas();
    this.botonInicio = "Reiniciar";
    this.mensaje = "Memoriza las cartas!";
  }

  verificarPartida() {

    if (this.intentos === 0) {
      this.finalizarJuego();
      this.mensaje = "Perdiste, inténtalo de nuevo!";
    }
    if (this.cartas.every((car) => car.encontrada)) {
      this.finalizarJuego();
      this.mensaje = "Ganaste, felicitaciones!";
    }
  }

  finalizarJuego() {
    this.jugando = false;
    this.botonInicio = "Iniciar";
    this.cartas.forEach((car) => {
      car.visible = true;
    })

  }

  intentar() {
    if (this.intentos > 0) {
      this.intentando = true;
    }
  }

}
