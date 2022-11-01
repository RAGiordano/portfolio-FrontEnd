import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[] = [];
  
  constructor(private portfolioService: PortfolioService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia():void{
    this.portfolioService.listaExperiencia().subscribe(data => {this.expe = data;})
    
  }

  borrar(id?: number){
    if(id != undefined){
      this.portfolioService.borrarExperiencia(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("Error al borrar la experiencia.");
        }
      )
    }
  }

}

