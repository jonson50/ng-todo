import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listaTareas: Tarea[] = [];
  nombreTarea = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea() {
    // Crear objeto Tarea
    const tarea:Tarea = {
      nombre: this.nombreTarea,
      estado: false
    };
    // Agregar el objeto Tarea al array
    this.listaTareas.push(tarea);
    // Reseting Input
    this.nombreTarea = "";
  }

  eliminarTarea(indice:number):void {
    this.listaTareas.splice(indice, 1);
  }

  actualizarTarea(tarea:Tarea, indice:number):void {
    this.listaTareas[indice].estado = !tarea.estado;
  }

}
