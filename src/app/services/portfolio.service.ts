import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  url = 'http://localhost:8080/personas/';
  //url = '/personas/';
  

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{//Observable para la petición asíncrona.
    return this.http.get<persona>(this.url + 'traer/perfil');
  }
}
