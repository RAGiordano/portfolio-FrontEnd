import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormacionComp } from 'src/app/model/formacion-comp';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-editar-formacion-comp',
  templateUrl: './editar-formacion-comp.component.html',
  styleUrls: ['./editar-formacion-comp.component.css']
})
export class EditarFormacionCompComponent implements OnInit {

    formacionComp : FormacionComp = null;
  
    constructor(private portfolioService: PortfolioService, private activatedRouter: ActivatedRoute, private router: Router) { }
  
    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.portfolioService.detalleFormacionComp(id).subscribe(
        data =>{
          this.formacionComp = data;
        }, err =>{
          alert("No se puede modificar la información (1)");
          this.router.navigate(['']);
        }
      )
    }
  
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      /* alert(id); */
      this.portfolioService.editarFormacionComp(id, this.formacionComp).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert("No se puede modificar la información (2)");
          this.router.navigate(['']);
        }
      )
    }
  }
  