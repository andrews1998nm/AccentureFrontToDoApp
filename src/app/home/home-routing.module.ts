import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { CategoriasEditarComponent } from '../pages/categorias/categorias-editar/categorias-editar.component';
import { TareasCrearComponent } from '../pages/tareas/tareas-crear/tareas-crear.component';

const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'categorias/editar/:id', component: CategoriasEditarComponent },
    { path: 'categorias/crear', component: CategoriasEditarComponent },
    { path: 'tareas/editar/:id', component: TareasCrearComponent },
    { path: 'tareas/crear', component: TareasCrearComponent },
  ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
