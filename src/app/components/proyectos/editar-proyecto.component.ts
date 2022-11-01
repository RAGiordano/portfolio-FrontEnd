import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  proyect : Proyecto = null;

  constructor(private portfolioService: PortfolioService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.portfolioService.detalleProyecto(id).subscribe(
      data =>{
        this.proyect = data;
      }, err =>{
        alert("No se pueden modificar los datos del proyecto.");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.portfolioService.editarProyecto(id, this.proyect).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("No se puede modificar el proyecto.");
        this.router.navigate(['']);
      }
    )
  }
}
