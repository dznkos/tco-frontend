import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  nombre: string;
  apellido: string;
  email: string;

  ngOnInit(): void {
    this.obtenerdatos();
  }

  obtenerdatos(){
    this.nombre = localStorage.getItem('nombre')!;
    this.apellido =localStorage.getItem('apellido')!;
    this.email = localStorage.getItem('email')!;
  }
}
