import { NonNullAssert } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


   nombre: string;
   apellido: string;
   email: string;
  
  // userData: any[];
  constructor(){
   
  }

  ngOnInit(): void {
    this.obtenerdatos();
  }

  obtenerdatos(){
    this.nombre = localStorage.getItem('nombre')!;
    this.apellido =localStorage.getItem('apellido')!;
    this.email = localStorage.getItem('email')!;
  }
}

