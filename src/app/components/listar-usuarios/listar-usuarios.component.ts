import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';


@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  
  usuarios:any;

  Editarusuario:any = {
    nombres: '',
    Cedula:  '',
    apellidos: '',
    telefono: '',
    email: ''
  }

  constructor(private conexion:ConexionService) {
    this.conexion.listaUsuario().subscribe(usuario=>{
      this.usuarios = usuario;
      console.log(this.usuarios);
    })
   }

  ngOnInit() {
  }

  Eliminar(usuarios){
    this.conexion.eliminarUsuario(usuarios);
  }

  Editar(usuarios){
    this.Editarusuario = usuarios;
  }

  AgregarUsuarioEditado(){
    this.conexion.editarUsuario(this.Editarusuario);
  } 


}
