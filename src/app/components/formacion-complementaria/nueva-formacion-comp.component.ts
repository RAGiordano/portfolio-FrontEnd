import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormacionComp } from 'src/app/model/formacion-comp';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-nueva-formacion-comp',
  templateUrl: './nueva-formacion-comp.component.html',
  styleUrls: ['./nueva-formacion-comp.component.css']
})
export class NuevaFormacionCompComponent implements OnInit {

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
    const formacionComp = new FormacionComp(this.titulo,
                                      this.urlLogo,
                                      this.institucion,
                                      this.fechaDesde,
                                      this.fechaHasta,
                                      this.descripcion);
    this.portfolioService.crearFormacion(formacionComp).subscribe
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
