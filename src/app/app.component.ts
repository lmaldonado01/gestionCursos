import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestionCursos';
  curso:{
    nombre:string,
    descripcion:string,
    duracion:number,
    costo:number
  };
  cursos=Array();

  constructor() {

    this.curso = {
      nombre:'',
      descripcion:'',
      duracion:0,
      costo:0
    }
    this.cursos = [{nombre:'Java', descripcion:'Curso nivel I', duracion:24, costo:15},
    {nombre:'Oracle', descripcion:'Curso nivel I', duracion:24, costo:12},
    {nombre:'PHP', descripcion:'Curso nivel I', duracion:24, costo:10},
    {nombre:'Java2', descripcion:'Curso nivel II', duracion:42, costo:18}
    ]
  }

  cantCursos(){
    return this.cursos.length>0;
  }

  registrarCurso(){
    for (let x = 0; x < this.cursos.length; x++) {
      if (this.cursos[x].nombre==this.curso.nombre) {
        alert('El curso ya esta registrado');
        return;
      }
    }
    this.cursos.push({nombre:this.curso.nombre,
      descripcion:this.curso.descripcion,
      duracion:this.curso.duracion,
      costo:this.curso.costo
    });
    this.curso.nombre = '';
    this.curso.descripcion = '';
    this.curso.duracion = 0;
    this.curso.costo = 0;
  }

  selectCurso(curso:any){
    this.curso.nombre = curso.nombre;
    this.curso.descripcion = curso.descripcion;
    this.curso.duracion = curso.duracion;
    this.curso.costo = curso.costo;
  }

  borrarCurso(curso:any){
    for (let i = 0; i < this.cursos.length; i++) {
      if (this.cursos[i].nombre==curso.nombre) {
        this.cursos.splice(i,1);
        return;
      }
    }
  }

}
