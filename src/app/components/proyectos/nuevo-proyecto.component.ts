import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {

  nombre: string = '';
  urlImagen: string = '';
  descripcion: string = '';
  urlProyecto: string = '';
  fechaRealizacion: string = '';

  constructor(private portfolioService: PortfolioService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyect = new Proyecto(this.nombre,
                                  this.urlImagen,
                                  this.descripcion,
                                  this.urlProyecto,
                                  this.fechaRealizacion);
    this.portfolioService.crearProyecto(proyect).subscribe
      (data =>{
        alert("El proyecto se agregó exitosamente.");
        this.router.navigate(['']);
        }, err => {
          alert("Error");
          this.router.navigate(['']);
        }
      )
  }
}
