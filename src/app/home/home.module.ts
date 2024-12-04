import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ModalTareasPage } from './modales/tareas/modal-tareas.page';
import { HomePageRoutingModule } from './home-routing.module';
import { TareasComponent } from '../pages/tareas/tareas.component';
import { CategoriasComponent } from '../pages/categorias/categorias.component';
import { CategoriasEditarComponent } from '../pages/categorias/categorias-editar/categorias-editar.component';
import { TareasCrearComponent } from '../pages/tareas/tareas-crear/tareas-crear.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, TareasComponent, CategoriasComponent, ModalTareasPage, CategoriasEditarComponent, TareasCrearComponent]
})
export class HomePageModule {}
