import { Component, OnInit } from '@angular/core';
import { Competencia } from 'src/app/model/competencia';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-competencias',
  templateUrl: './competencias.component.html',
  styleUrls: ['./competencias.component.css']
})
export class CompetenciasComponent implements OnInit {

  comp: Competencia[] = [];
  
  constructor(private portfolioService: PortfolioService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarCompetencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarCompetencia():void{
    this.portfolioService.listaCompetencias().subscribe(data => {this.comp = data;})
    
  }

  borrar(id?: number){
    if(id != undefined){
      this.portfolioService.borrarCompetencia(id).subscribe(
        data => {
          this.cargarCompetencia();
        }, err => {
          alert("Error al borrar la competencia.");
        }
      )
    }
  }

}

