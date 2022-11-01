import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {
  expLab : Experiencia = null;

  constructor(private portfolioService: PortfolioService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.portfolioService.detalleExperiencia(id).subscribe(
      data =>{
        this.expLab = data;
      }, err =>{
        alert("No se puede modificar la experiencia 1");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.portfolioService.editarExperiencia(id, this.expLab).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("No se puede modificar la experiencia 2");
        this.router.navigate(['']);
      }
    )
  }
}
