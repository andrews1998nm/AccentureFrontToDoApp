import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { categoria } from 'src/app/modelos/categorias.modelo';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';

@Component({
  selector: 'app-categorias-editar',
  templateUrl: './categorias-editar.component.html',
  styleUrls: ['./categorias-editar.component.scss'],
})
export class CategoriasEditarComponent  implements OnInit {

  idEditar: number;
  inputCategoria: string;
  categoria: categoria;

  constructor(private activatedRoute: ActivatedRoute, private categoriasService: CategoriasService) { }

  ngOnInit() {

    this.idEditar = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

    if(this.idEditar){
      //SI LLEGO EL ID
      this.categoria = this.categoriasService.obtenerLaCategoria(this.idEditar);
      this.inputCategoria = this.categoria.nombre;
    }else{
      //SINO LLEGA
      this.idEditar = null;
      this.categoria = null;
      this.inputCategoria = '';
    }
  }

  guardarEdicion(){
    if(this.idEditar){
      let categoria:categoria = {
        id: this.categoria.id,
        nombre: this.inputCategoria,
      }
      this.categoriasService.editarCategoria(categoria);
      this.categoriasService.mostrarAlerta('top', 'Categoria editada exitosamente!', 'success')
    }else{
      if(this.inputCategoria != ''){
        this.categoriasService.agregarCategoria(this.inputCategoria)
        this.categoriasService.mostrarAlerta('top', 'Categoria creada exitosamente!', 'success')
      }
    }
  }

  
}
