import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { categoria } from 'src/app/modelos/categorias.modelo';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private categorias: categoria[] = [];
  cantidadDigitosId: number = 10;

  constructor(private alertaController: ToastController) {
    this.cargarCategorias()
   }

  //ALMACENA LAS CATEGORIAS EN EL LOCAL STORAGE
  guardarCategoria(){
    localStorage.setItem('categorias', JSON.stringify(this.categorias));
  }

  //CARGA LA CATEGORIAS GUARDAS EN EL LOCAL STORAGE
  cargarCategorias(){
    const categoriasGuardadas = localStorage.getItem('categorias');
    if(categoriasGuardadas){
      this.categorias = JSON.parse(categoriasGuardadas);
    }
  }

  //OBTENER CATEGORIAS
  obtenerCategorias(){
    return this.categorias;
  }

  //AGREGAR CATEGORIAS
  agregarCategoria(nombre: string){
    this.categorias.push({
      id: this.generarIdCategoria(),
      nombre: nombre});
      this.guardarCategoria()
  }

  obtenerLaCategoria(id: number){
    let categoriaEditable: categoria;

    this.categorias.filter( categoria => {
      if(categoria.id == id){
        categoriaEditable = categoria;
      }
    });
    return categoriaEditable;
  }

  editarCategoria(categoria:categoria){
    console.log( "objeto recibido: " + categoria);
    this.categorias.filter( objeto => {
      if(objeto.id == categoria.id){
        console.log("id encontrado: " + categoria.id);
        this.almacenarEdicion(objeto.id,categoria.nombre);
      }
    });
  }

  almacenarEdicion(id:number, nombre:string){
    var categorias = JSON.parse(localStorage.getItem('categorias'));
    let categoriaIndex:number = categorias.findIndex(categoria => categoria.id == id);

    console.log("categorias: " + categorias);

    console.log("categoria encontrada: " + categoriaIndex);
    
   if(categoriaIndex != null){
    console.log("nombre a almacenar: " + nombre + " index: " + categoriaIndex);
    this.categorias[categoriaIndex] = {
      id: id,
      nombre: nombre
    }
    this.guardarCategoria();
   }
  }

  eliminarCategoria(index: number){
    this.categorias.splice(index, 1);
    this.guardarCategoria();
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

  generarIdCategoria(){
    return parseInt(`${Date.now()}-${Math.random().toString(36).substr(2, 9)}`);
  }
}
