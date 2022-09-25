import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-formacion-academica',
  templateUrl: './formacion-academica.component.html',
  styleUrls: ['./formacion-academica.component.css']
})
export class FormacionAcademicaComponent implements OnInit {

/*   formacionAcademicaList:any; */
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
/*     this.datosPortfolio.obtenerDatos().subscribe(data=>{
      this.formacionAcademicaList=data.formacionAcademica
    }) */
  }

}
