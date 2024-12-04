import { categoria } from "./categorias.modelo";

export interface tarea {
    //id?: number;
    titulo: string;
    descripcion: string;
    categoria?: categoria
    completada: boolean;
  }