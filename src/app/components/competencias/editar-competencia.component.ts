import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Competencia } from 'src/app/model/competencia';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-editar-competencia',
  templateUrl: './editar-competencia.component.html',
  styleUrls: ['./editar-competencia.component.css']
})
export class EditarCompetenciaComponent implements OnInit {
  comp : Competencia = null;
  constructor(private portfolioService: PortfolioService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.portfolioService.detalleCompetencia(id).subscribe(
      data =>{
        this.comp = data;
      }, err =>{
        alert("No se puede modificar la competencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.portfolioService.editarCompetencia(id, this.comp).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("No se puede modificar la competencia");
        this.router.navigate(['']);
      }
    )
  }
}
