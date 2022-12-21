import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {JuegodadosComponent} from './juegodados/juegodados.component';
import {AcercadeComponent} from './acercade/acercade.component';  
const routes: Routes = [
   {path:'juegodado',
  component:JuegodadosComponent},
  {
    path:'acercade',
    component:AcercadeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
