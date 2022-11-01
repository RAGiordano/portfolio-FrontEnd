import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formacion } from 'src/app/model/formacion';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-editar-formacion-academica',
  templateUrl: './editar-formacion-academica.component.html',
  styleUrls: ['./editar-formacion-academica.component.css']
})
export class EditarFormacionAcademicaComponent implements OnInit {
  
    formacion : Formacion = null;
  
    constructor(private portfolioService: PortfolioService, private activatedRouter: ActivatedRoute, private router: Router) { }
  
    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.portfolioService.detalleFormacion(id).subscribe(
        data =>{
          this.formacion = data;
        }, err =>{
          alert("No se puede modificar la información 1");
          this.router.navigate(['']);
        }
      )
    }
  
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      /* alert(id); */
      this.portfolioService.editarFormacionAcademica(id, this.formacion).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert("No se puede modificar la información 2");
          this.router.navigate(['']);
        }
      )
    }
  }
  