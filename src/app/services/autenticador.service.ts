import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Auth, masdatos } from './../interfaces/auth'
import { catchError, Observable } from 'rxjs'
import { StorageService } from './../services/storage.service'
@Injectable({
  providedIn: 'root'
})
export class AutenticadorService {
  public url: string = 'https://dummyjson.com/auth/login'
  public datosusuario: masdatos | null = null;
  constructor(
    private http: HttpClient,
    private almacenamiento: StorageService
  ) { }
  public validartokens({ username, password }: Auth, activo: boolean) {
    this.http.post<masdatos | null>(this.url, { password, username }, { headers: { 'content-type': 'application/json' } }).pipe(
      catchError(async (error: HttpErrorResponse) => {
        return null;
      })
    ).subscribe((datosdeinternet) => {
      if (datosdeinternet) {
        this.datosusuario = datosdeinternet;
        if (activo) {
          this.almacenamiento.guardartoken(datosdeinternet.token)
        }
      }
    })
  }
}
