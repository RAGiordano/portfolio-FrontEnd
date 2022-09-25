import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-encabezado-personal',
  templateUrl: './encabezado-personal.component.html',
  styleUrls: ['./encabezado-personal.component.css']
})
export class EncabezadoPersonalComponent implements OnInit {

  //Instancio la clase persona
  persona: persona = new persona("","","","","","","","","","","","","","","");
  
  //Tengo que replicar lo de persona para las otras clases.


  constructor(public portfolioService: PortfolioService) { }

  ngOnInit(): void {
    //Subscribe conecta con el observer (en este caso, persona) atento a cambios.
      this.portfolioService.getPersona().subscribe(data => {this.persona = data})
  }

}
