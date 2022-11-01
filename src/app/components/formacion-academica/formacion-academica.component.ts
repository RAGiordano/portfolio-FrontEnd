import { Component, OnInit } from '@angular/core';
import { Formacion } from 'src/app/model/formacion';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-formacion-academica',
  templateUrl: './formacion-academica.component.html',
  styleUrls: ['./formacion-academica.component.css']
})
export class FormacionAcademicaComponent implements OnInit {

/*   formacionAcademicaList:any; */
  formacion: Formacion[] = [];
  constructor(private datosPortfolio:PortfolioService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
/*     this.datosPortfolio.obtenerDatos().subscribe(data=>{
      this.formacionAcademicaList=data.formacionAcademica
    }) */
    this.cargarFormacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged=false;
    }
  }

  cargarFormacion(): void{
    this.datosPortfolio.listaFormacion().subscribe(
      data =>{
        this.formacion = data;
      }
    )
    
  }

  borrar(id?: number){
    if(id != undefined){
      this.datosPortfolio.borrarFormacion(id).subscribe(
        data => {
          this.cargarFormacion();
        }, err => {
          alert('Error al eliminar.')
        }
      )
    }
  }
    
}


