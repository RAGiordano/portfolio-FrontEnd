import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formacion } from 'src/app/model/formacion';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-nueva-formacion',
  templateUrl: './nueva-formacion.component.html',
  styleUrls: ['./nueva-formacion.component.css']
})
export class NuevaFormacionComponent implements OnInit {

  titulo: string = '';
  urlLogo: string = '';
  institucion: string = '';
  fechaDesde: string = '';
  fechaHasta: string = '';
  descripcion: string = '';

  constructor(private portfolioService: PortfolioService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const formacion = new Formacion(this.titulo,
                                      this.urlLogo,
                                      this.institucion,
                                      this.fechaDesde,
                                      this.fechaHasta,
                                      this.descripcion);
    this.portfolioService.crearFormacion(formacion).subscribe
      (data =>{
        alert("Se agregó la formacion.");
        this.router.navigate(['']);
        }, err => {
          alert("Error");
          this.router.navigate(['']);
        }
      )
  }
}
