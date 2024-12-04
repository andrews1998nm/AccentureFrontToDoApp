import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { tarea } from 'src/app/modelos/tareas.modelo';
import { TareasService } from 'src/app/services/tareas/tareas.service';

@Component({
  selector: 'app-modal-tareas',
  templateUrl: './modal-tareas.page.html',
  styleUrls: ['./modal-tareas.page.scss'],
})
export class ModalTareasPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;

  inputTitulo: string = '';
  inputDescripcion: string = '';
  @Input() isModalOpen;

  constructor(private tareasService: TareasService) { }

  ngOnInit() {
  }

  crearTarea(){
    if(this.inputTitulo !==  '' && this.inputDescripcion !== ''){

      let tarea: tarea = {
        titulo: this.inputTitulo,
        descripcion: this.inputDescripcion,
        completada: false
      }

      this.tareasService.agregarTareas(tarea);
      this.modal.dismiss(null, 'confirm');
    }
  }

  cancelar(){
    this.modal.dismiss(null, 'cancel');
    this.setModalOpen(false);
  }

  refrescarTareas(event:any){
    this.tareasService.cargarTareas();
  }

  setModalOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
