import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyect: Proyecto[] = [];

  constructor(private portfolioService: PortfolioService, private tokenService: TokenService) { }
  isLogged = false;


  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto():void{
    this.portfolioService.listaProyecto().subscribe(data => {this.proyect = data;})
    
  }

  borrar(id?: number){
    if(id != undefined){
      this.portfolioService.borrarProyecto(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert("Error al borrar el proyecto.");
        }
      )
    }
  }

}