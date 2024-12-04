import { Injectable } from '@angular/core';
import { tarea } from '../../modelos/tareas.modelo';
import { categoria } from 'src/app/modelos/categorias.modelo';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private tareas: tarea[] = [];
  //digitosId: number = 10;

  constructor(private alertaController: ToastController) {
    this.cargarTareas();
   }

   //CARGA LA TAREAS GUARDAS EN EL LOCAL STORAGE
  cargarTareas(){
    const tareasGuardadas = localStorage.getItem('tareas');
    if(tareasGuardadas){
      this.tareas = JSON.parse(tareasGuardadas);
    }
  }

  //ALMACENA LAS TAREAS EN EL LOCAL STORAGE
  guardarTareas(){
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }

  //OBTENER TAREAS
  obtenerTareas(){
    return this.tareas;
  }

  //AGREGAR TAREAS
  agregarTareas(tarea: tarea){
    this.tareas.push(tarea);
    this.guardarTareas();
  }

  agregarCategoriaATarea(index,categoria:categoria){
    this.tareas[index].categoria = categoria;
    this.guardarTareas();
  }

  //COMPLETAR TAREAS
  completarTarea(index: number){
    //REVIERTO EL ESTADO DINAMICAMENTE
    this.tareas[index].completada = !this.tareas[index].completada;
    this.guardarTareas();

    return this.tareas[index].completada;
  }

  eliminarTarea(index: number){
    this.tareas.splice(index, 1);
    this.guardarTareas();
  }

  async mostrarAlerta(position: 'top' | 'middle' | 'bottom',message:string, color: 'success' | 'danger' | 'warning') {
    const toast = await this.alertaController.create({
      message: message,
      duration: 1500,
      position: position,
      color: color
    });

    await toast.present();
  }

}
