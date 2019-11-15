import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsportesComponent } from './pages/esportes/esportes.component';
import { AtletasComponent } from './pages/atletas/atletas.component';
import { PaisesComponent } from './pages/paises/paises.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { HomeComponent } from './pages/home/home.component';
import { AtletaPerfilComponent } from './pages/atleta-perfil/atleta-perfil.component';
import { PaisPerfilComponent } from './pages/pais-perfil/pais-perfil.component';
import { EventoPerfilComponent } from './pages/evento-perfil/evento-perfil.component';
import { EsportePerfilComponent } from './pages/esporte-perfil/esporte-perfil.component';
import { GenerosComponent } from './pages/generos/generos.component';
import { MasculinoComponent } from './pages/masculino/masculino.component';
import { FemininoComponent } from './pages/feminino/feminino.component';
import { LocaisComponent } from './pages/locais/locais.component';
import { LocalPerfilComponent } from './pages/local-perfil/local-perfil.component';

const routes: Routes = [
  { path: 'esportes', component: EsportesComponent },
  { path: 'atletas', component: AtletasComponent },
  { path: 'atletas/atleta-perfil', component: AtletaPerfilComponent },
  { path: 'paises', component: PaisesComponent },
  { path: 'paises/pais-perfil', component: PaisPerfilComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'eventos/evento-perfil', component: EventoPerfilComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }