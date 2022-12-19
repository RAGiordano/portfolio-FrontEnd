import { Component, OnInit } from '@angular/core';
import { FormacionComp } from 'src/app/model/formacion-comp';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-formacion-complementaria',
  templateUrl: './formacion-complementaria.component.html',
  styleUrls: ['./formacion-complementaria.component.css']
})
export class FormacionComplementariaComponent implements OnInit {


/*   formacionCompList:any; */
  formacionComp: FormacionComp[] = [];
  constructor(private datosPortfolio:PortfolioService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
/*     this.datosPortfolio.obtenerDatos().subscribe(data=>{
      this.formacionCompList=data.formacionComp
    }) */
    this.cargarFormacionComp();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged=false;
    }
  }

  cargarFormacionComp(): void{
    this.datosPortfolio.listaFormacionComp().subscribe(
      data =>{
        this.formacionComp = data;
      }
    )
    
  }

  borrar(id?: number){
    if(id != undefined){
      this.datosPortfolio.borrarFormacionComp(id).subscribe(
        data => {
          this.cargarFormacionComp();
        }, err => {
          alert('Error al eliminar.')
        }
      )
    }
  }
    
}


