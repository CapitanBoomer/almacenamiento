import { Component } from '@angular/core';
import { AutenticadorService } from './../services/autenticador.service'
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Build } from 'ionicons/dist/types/stencil-public-runtime';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public formulario: FormGroup
  constructor(public auth: AutenticadorService, public form: FormBuilder) {
    this.formulario = form.group({
      username: [''],
      password: [''],
      activo: [false]
    })
  }

  ionViewWillEnter() {

  }

  public probarlog(){
    this.auth.validartokens({
     ...this.formulario.value
    },this.formulario.get('activo')?.value)
  }


}
