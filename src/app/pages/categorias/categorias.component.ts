import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { categoria } from 'src/app/modelos/categorias.modelo';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent  implements OnInit {

  categoriasArray: categoria[] = [];
  categoriasArraySearch: categoria[] = [];
  barraBusqueda: string = '';
  @Output() eventoEnviarId = new EventEmitter();
  @Output() isModalCategoriasOpen = new EventEmitter();

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit() {
    this.categoriasArray = this.listarCategorias();
  }

  eliminarCategoria(index: number){
    this.categoriasService.eliminarCategoria(index);
    this.categoriasService.mostrarAlerta('top', "Categoria eliminada!", "success");
  }

  listarCategorias(){
    return this.categoriasService.obtenerCategorias();
  }

  filtrarCategorias( event : any){

    let texto: string = event.detail.value;

    if(texto === ''){
      this.categoriasArraySearch.length = 0;
    }else{
      this.categoriasArraySearch = this.categoriasArray.filter( categoria => {
        if(categoria.nombre.toLowerCase().includes(texto.toLowerCase())){
          return categoria;
        }else{
          return this.categoriasArraySearch.length = 0;
        }
      });
    }
  }

}
