import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface Usuario
{
  Cedula: Number;
  nombres: String;
  apellidos: String;
  telefono: String;
  email: String;
}


@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private usuariosCollection: AngularFirestoreCollection<Usuario>;
  usuarios: Observable<Usuario[]>;

  private usuariosDoc: AngularFirestoreDocument<Usuario>;

  constructor(private afs: AngularFirestore) { 
    this.usuariosCollection = afs.collection<Usuario>('usuarios');
    this.usuarios = this.usuariosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Usuario;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  listaUsuario(){
    return this.usuarios;
  }

  agregarUsuario(usuarios: Usuario) {
    this.usuariosCollection.add(usuarios);
  }

  eliminarUsuario(usuarios){
    this.usuariosDoc = this.afs.doc<Usuario>(`usuarios/${usuarios.id}`);
    this.usuariosDoc.delete();
  }

  editarUsuario(usuarios){
    this.usuariosDoc = this.afs.doc<Usuario>(`usuarios/${usuarios.id}`);
    this.usuariosDoc.update(usuarios);
  }
  
}

