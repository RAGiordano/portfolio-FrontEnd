import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PortfolioService } from 'src/app/services/portfolio.service';
@Component({
  selector: 'app-editar-encabezado-personal',
  templateUrl: './editar-encabezado-personal.component.html',
  styleUrls: ['./editar-encabezado-personal.component.css']
})
export class EditarEncabezadoPersonalComponent implements OnInit {

  persona : Persona = null;

  constructor(private portfolioService: PortfolioService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    /* const id = this.activatedRouter.snapshot.params['id']; */
    this.portfolioService.getPersona().subscribe(
      data =>{
        this.persona = data;
      }, err =>{
        alert("Error al modificar los datos de la persona.");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.portfolioService.editarPersona(id, this.persona).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar los datos de la persona.");
        this.router.navigate(['']);
      }
    )
  }
}
