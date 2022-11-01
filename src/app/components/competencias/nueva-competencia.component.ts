import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Competencia } from 'src/app/model/competencia';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-nueva-competencia',
  templateUrl: './nueva-competencia.component.html',
  styleUrls: ['./nueva-competencia.component.css']
})
export class NuevaCompetenciaComponent implements OnInit {

  nombre: string = '';
  descripcion: string = '';
  urlLogo: string = '';
  porcentaje: number = 0;


  constructor(private portfolioService: PortfolioService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const comp = new Competencia(this.nombre,
                                 this.descripcion,
                                 this.urlLogo,
                                 this.porcentaje);
    this.portfolioService.crearCompetencia(comp).subscribe
      (data =>{
        alert("Se agregó la competencia.");
        this.router.navigate(['']);
        }, err => {
          alert("Error");
          this.router.navigate(['']);
        }
      )
  }
}
