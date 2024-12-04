import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tarea } from 'src/app/modelos/tareas.modelo';
import { TareasService } from 'src/app/services/tareas/tareas.service';

@Component({
  selector: 'app-tareas-crear',
  templateUrl: './tareas-crear.component.html',
  styleUrls: ['./tareas-crear.component.scss'],
})
export class TareasCrearComponent  implements OnInit {

  idEditar: number;
  inputTitulo: string;
  inputDesc: string;
  tarea: tarea;

  constructor(private activatedRoute: ActivatedRoute, private tareasService: TareasService) { }

  ngOnInit() {

    this.idEditar = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

    //FUNCIONALIDAD PARA ACTIVAR CON EL REMOTECONFIG
    if(this.idEditar){
      //SI LLEGO EL ID
      /*this.tarea = this.tareasService.Tarea(this.idEditar);
      this.inputTitulo = this.tarea.titulo;*/
    }else{
      //SINO LLEGA
      this.idEditar = null;
      this.inputTitulo = '';
      this.inputDesc = '';
    }
  }

  guardarEdicion(){
    //FUNCIONALIDAD PARA ACTIVAR CON EL REMOTECONFIG
    if(this.idEditar){
      /*let categoria:categoria = {
        id: this.categoria.id,
        nombre: this.inputCategoria,
      }
      this.tareasService.editarCategoria(categoria);*/
    }else{
      if(this.inputTitulo != '' && this.inputDesc != ''){
        let tarea:tarea = {
          titulo:this.inputTitulo,
          descripcion:this.inputDesc,
          completada:false
        }
        this.tareasService.agregarTareas(tarea);
        this.tareasService.mostrarAlerta('top', 'Tarea creada exitosamente!', 'success')
      }
    }
  }

  
}
