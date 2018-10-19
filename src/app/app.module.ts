import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

//Servicios
import { ConexionService } from './services/conexion.service';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { AddUsuariosComponent } from './components/add-usuarios/add-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarUsuariosComponent,
    AddUsuariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule, 
    AngularFireStorageModule 
  ],
  providers: [ConexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
