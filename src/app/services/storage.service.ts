import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage-angular'
@Injectable({
  providedIn: 'root'
})
export class StorageService {
private almacen: Storage | null = null;
  constructor(private bd:Storage) {
    this.iniciar
  }

  public async iniciar(){
   this.almacen = await this.bd.create()
  }

  public async guardartoken(token : string){
 await this.almacen?.set('token',token)
  }

  public async obtenertoken () {
  return await  this.almacen?.get('token')||null;
  }
}
