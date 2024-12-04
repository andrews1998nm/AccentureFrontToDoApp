import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas/tareas.service';
import { tarea } from 'src/app/modelos/tareas.modelo';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';
import { categoria } from 'src/app/modelos/categorias.modelo';
import { RemoteConfigService } from 'src/app/services/remoteConfig/remote-config.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent implements OnInit {

  tareasArray: tarea[] = [];
  categoriasArray: categoria[] = [];
  tareasArraySearch: tarea[] = [];
  barraBusqueda: string = '';
  categoriasSeleccionadas: number[] = [];
  isOnBarraBusqueda: boolean = false;

  constructor(private tareasService: TareasService,
    private categoriasService: CategoriasService, private remoteFirebaseService: RemoteConfigService) { }

  ngOnInit() {
    //console.log(this.remoteFirebaseService.barraBusqueda);
    //this.remoteFirebaseService.;
    /*this.remoteFirebaseService.barraBusqueda$.subscribe( res =>{
      this.isOnBarraBusqueda = res;
    })*/

    this.remoteFirebaseService.barraBusqueda$.subscribe((isEnabled) => {
      this.isOnBarraBusqueda = isEnabled;
      console.log('Barra de búsqueda habilitada:', this.isOnBarraBusqueda);
    });

    //this.consolaEstadoBarraBusqueda();
    this.tareasArray = this.obtenerTareas();
    this.categoriasArray = this.obtenerCategoriasSeleccionar();
  }

  //Obtengo las tareas
  obtenerTareas() {
    return this.tareasService.obtenerTareas();
  }
  //Obtengo las categorias
  obtenerCategoriasSeleccionar() {
    return this.categoriasService.obtenerCategorias();
  }
    consolaEstadoBarraBusqueda(){
  }


  //NO OPTIMIZADO YA QUE EN CADA BUSQUEDA DEBE CONSULTAR EL SERVICIO Y RELLENAR EL ARRAY//
  /*filtrarTareas( event : any){

    let texto: string = event.detail.value;

    if(texto === '' || texto === null){
      this.tareasService.cargarTareas();
      this.tareasArray = this.obtenerTareas();
    }else{
      this.tareasArray.filter( tarea => {

        if(tarea.titulo.toLowerCase().includes(texto.toLowerCase()) || tarea.descripcion.toLowerCase().includes(texto.toLowerCase())){
          while (this.tareasArray.length) this.tareasArray.pop();

          this.tareasArray.push(tarea);
        }
      });
    }
  }*/

  //OPTIMIZADO CON UN SEGUNDO ARRAY YA NO ES NECESARIO CONSULTAR CONSTANTEMENTE EL SERVICIO (ESTE ES UN CASO MUY ESPECIFICO)
  filtrarTareas(event: any) {

    let texto: string = event.detail.value;

    if (texto === '' && this.categoriasSeleccionadas == null) {
      this.tareasArraySearch.length = 0;
    } else {
      this.tareasArraySearch = this.tareasArray.filter(tarea => {
        if (tarea.titulo.toLowerCase().includes(texto.toLowerCase())
          || tarea.descripcion.toLowerCase().includes(texto.toLowerCase())) {
          return tarea;
        } else {
          return this.tareasArraySearch.length = 0;
        }
      });
    }
  }

  completarTarea(index: number) {
    let estado = this.tareasService.completarTarea(index);
    if (estado === true) {
      this.tareasService.mostrarAlerta('top', "Tarea completada!", 'success');
    }
  }

  eliminarTarea(index: number) {
    this.tareasService.eliminarTarea(index);
    this.tareasService.mostrarAlerta('top', "Tarea eliminada!", 'success');
  }

  SeleccionCategoria(event, indexTarea: number) {

    let seleccion: number = event.detail.value;

    if (seleccion) {
      let categoria: categoria = this.categoriasService.obtenerLaCategoria(seleccion);
      //ASIGNAMOS LA CATEGORIA A LA TAREA
      this.tareasService.agregarCategoriaATarea(indexTarea, categoria);
      this.tareasService.mostrarAlerta('top', "Categoria asignada!", 'success');
    }
  }

  validaTareaCategoria(tarea: tarea) {
    if (tarea.categoria != undefined ||
      tarea.categoria != null) {
      return tarea.categoria.id;
    } else {
      return "";
    }
  }

  //FILTRO PARA OBTENER CIERTAS TAREAS
  buscarPorCategoria() {
    //LIMPIA EL ARRAY DE BUSQUEDA
    this.tareasArraySearch.length = 0;
    this.categoriasSeleccionadas.forEach(id => {
      this.tareasArray.forEach(tarea => {
        if (tarea.categoria.id == id) {
          this.tareasArraySearch.push(tarea);
        }
      });
    });
  }


  seleccionFiltroCategoria(evento) {
    this.categoriasSeleccionadas = evento.detail.value;

    if (this.categoriasSeleccionadas.length != 0) {
      this.buscarPorCategoria();
    } else {
      console.log(this.categoriasSeleccionadas);
      this.categoriasSeleccionadas.length = 0;
      this.tareasArraySearch.length = 0
    }
  }

}
