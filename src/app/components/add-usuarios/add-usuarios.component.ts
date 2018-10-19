import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-add-usuarios',
  templateUrl: './add-usuarios.component.html',
  styleUrls: ['./add-usuarios.component.css']
})
export class AddUsuariosComponent implements OnInit {

  usuarios:any = {
    nombres: '',
    Cedula:  '',
    apellidos: '',
    telefono: '',
    email: ''
  }

  constructor(private servicio:ConexionService) { }

  ngOnInit() {
  }

  agregar(){
    this.servicio.agregarUsuario(this.usuarios);
    this.usuarios.nombres='';
    this.usuarios.Cedula='';
    this.usuarios.apellidos='';
    this.usuarios.telefono='';
    this.usuarios.email='';
  }

}
