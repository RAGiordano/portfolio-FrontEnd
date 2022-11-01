import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {

  nombreEmpresa: string = '';
  urlLogo: string = '';
  puesto: string = '';
  descripcion: string = '';
  fechaDesde: string = '';
  fechaHasta: string = '';

  constructor(private portfolioService: PortfolioService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new Experiencia(this.nombreEmpresa,
                                      this.urlLogo,
                                      this.puesto,
                                      this.descripcion,
                                      this.fechaDesde,
                                      this.fechaHasta);
    this.portfolioService.crearExperiencia(expe).subscribe
      (data =>{
        alert("Se agregó la experiencia laboral.");
        this.router.navigate(['']);
        }, err => {
          alert("Error");
          this.router.navigate(['']);
        }
      )
  }
}
