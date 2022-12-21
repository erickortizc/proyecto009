import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-juegodados',
  templateUrl: './juegodados.component.html',
  styleUrls: ['./juegodados.component.css']
})
export class JuegodadosComponent implements OnInit {
  valor1:number;
  valor2: number;
  valor3: number;
  resultado: string="";
  intentos:number=0;
  ganados:number=0;
  perdidos:number=0;
  constructor() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
  }
  ngOnInit(): void {
    
  }

  retornarAleatorio() {
    return Math.trunc(Math.random() * 6) + 1;
  }

  tirar() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
    this.intentos++;
    if (this.valor1==this.valor2 && this.valor1==this.valor3)  
    {
      this.resultado='Ganó';
      this.ganados++;
    } 
    else{
      this.resultado='Perdió';
      this.perdidos++;
    }
      
      
  }
  
  
}
