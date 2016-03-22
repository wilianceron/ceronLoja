import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

import {Instancia} from './instancia';
import {InstanciaService} from '../services/instancia.service';

@Component({
  template: `
      <h3>Intâncias do jboss</h3>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="#instancia of instancias" (click)="onSelect(instancia)">
            <td>{{instancia.nome}}</td>
          </tr>
        </tbody>
      </table>
    `
})
export class InstanciaComponent {
  instancias: Instancia[];

  constructor(private _router: Router, private _service: InstanciaService) { }

  ngOnInit() {
    this._service.getInstancias().then(instancias => this.instancias = instancias);
  }

  onSelect(instancia: Instancia) {
    this._router.navigate(['InstanciaDetail', { id: instancia.id }]);
  }
}