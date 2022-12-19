import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EncabezadoPersonalComponent } from './components/encabezado-personal/encabezado-personal.component';
import { HttpClientModule } from '@angular/common/http';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FormacionAcademicaComponent } from './components/formacion-academica/formacion-academica.component';
import { FormacionComplementariaComponent } from './components/formacion-complementaria/formacion-complementaria.component';
import { CompetenciasComponent } from './components/competencias/competencias.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component'
import { LoginComponent } from './components/login/login.component';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
// import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './services/interceptor-service';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia.component';
import { NuevaFormacionComponent } from './components/formacion-academica/nueva-formacion.component';
import { EditarFormacionAcademicaComponent } from './components/formacion-academica/editar-formacion-academica.component';
import { EditarCompetenciaComponent } from './components/competencias/editar-competencia.component';
import { NuevaCompetenciaComponent } from './components/competencias/nueva-competencia.component';
import { EditarEncabezadoPersonalComponent } from './components/encabezado-personal/editar-encabezado-personal.component';
import { EditarProyectoComponent } from './components/proyectos/editar-proyecto.component';
import { NuevoProyectoComponent } from './components/proyectos/nuevo-proyecto.component';
import { NuevaFormacionCompComponent } from './components/formacion-complementaria/nueva-formacion-comp.component';
import { EditarFormacionCompComponent } from './components/formacion-complementaria/editar-formacion-comp.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EncabezadoPersonalComponent,
    ExperienciaComponent,
    FormacionAcademicaComponent,
    FormacionComplementariaComponent,
    CompetenciasComponent,
    ProyectosComponent,
    FooterComponent,
    AcercaDeComponent,
    LoginComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    NuevaExperienciaComponent,
    EditarExperienciaComponent,
    NuevaFormacionComponent,
    EditarFormacionAcademicaComponent,
    EditarCompetenciaComponent,
    NuevaCompetenciaComponent,
    EditarEncabezadoPersonalComponent,
    EditarProyectoComponent,
    NuevoProyectoComponent,
    NuevaFormacionCompComponent,
    EditarFormacionCompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    /* ReactiveFormsModule, */
        // Specify ng-circle-progress as an import
        NgCircleProgressModule.forRoot({
          // set defaults here
          "backgroundPadding": 2,
          "space": 0,
          "outerStrokeGradient": true,
          "outerStrokeWidth": 14,
          "outerStrokeColor": "#70728d",
          "outerStrokeGradientStopColor": "#b8bac9",
          "innerStrokeColor": "#e7e8ea",
          "innerStrokeWidth": 4,
          "imageHeight": 90,
          "imageWidth": 90,
          "animationDuration": 300,
          "showImage": true,
          "showBackground": false,
          "responsive": true})
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
