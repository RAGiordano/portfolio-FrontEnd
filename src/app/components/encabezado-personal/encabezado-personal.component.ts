import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-encabezado-personal',
  templateUrl: './encabezado-personal.component.html',
  styleUrls: ['./encabezado-personal.component.css']
})
export class EncabezadoPersonalComponent implements OnInit {
  //Instancio la clase persona
  persona: Persona = null;//new Persona("","","","","","","","","","","");

  
  constructor(public portfolioService: PortfolioService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    //Subscribe conecta con el observer (en este caso, persona) atento a cambios.
      this.portfolioService.getPersona().subscribe(data => {this.persona = data})
      if(this.tokenService.getToken()){
        this.isLogged = true;
      } else {
        this.isLogged=false;
      }

  }

/*   traerPersona(){
    this.portfolioService.getPersona().subscribe(data => {this.persona = data})
  } */
}
