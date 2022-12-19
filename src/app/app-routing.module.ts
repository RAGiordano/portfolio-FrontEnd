import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarCompetenciaComponent } from './components/competencias/editar-competencia.component';
import { NuevaCompetenciaComponent } from './components/competencias/nueva-competencia.component';
import { EditarEncabezadoPersonalComponent } from './components/encabezado-personal/editar-encabezado-personal.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia.component';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia.component';
import { EditarFormacionAcademicaComponent } from './components/formacion-academica/editar-formacion-academica.component';
import { NuevaFormacionComponent } from './components/formacion-academica/nueva-formacion.component';
import { EditarFormacionCompComponent } from './components/formacion-complementaria/editar-formacion-comp.component';
import { NuevaFormacionCompComponent } from './components/formacion-complementaria/nueva-formacion-comp.component';
import { LoginComponent } from './components/login/login.component';
import { EditarProyectoComponent } from './components/proyectos/editar-proyecto.component';
import { NuevoProyectoComponent } from './components/proyectos/nuevo-proyecto.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path:'portfolio',component:PortfolioComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'portfolio',pathMatch:'full'},
  {path:'nuevaexperiencia', component: NuevaExperienciaComponent},
  {path:'editarexperiencia/:id', component: EditarExperienciaComponent},
  {path: 'nuevaformacion', component: NuevaFormacionComponent},
  {path: 'editarformacion/:id', component: EditarFormacionAcademicaComponent},
  {path: 'nuevaformacioncomp', component: NuevaFormacionCompComponent},
  {path: 'editarformacioncomp/:id', component: EditarFormacionCompComponent},
  {path: 'nuevacompetencia', component: NuevaCompetenciaComponent},
  {path: 'editarcompetencia/:id', component: EditarCompetenciaComponent},
  {path: 'editarencabezadopersonal/:id', component: EditarEncabezadoPersonalComponent},
  {path: 'nuevoproyecto', component: NuevoProyectoComponent},
  {path: 'editarproyecto/:id', component: EditarProyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
