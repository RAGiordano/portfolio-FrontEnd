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
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EncabezadoPersonalComponent,
    ExperienciaComponent,
    FormacionAcademicaComponent,
    FormacionComplementariaComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    AcercaDeComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
