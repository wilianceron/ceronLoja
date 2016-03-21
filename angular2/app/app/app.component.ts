import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {AlunosListComponent} from './alunos-list.component';
import {CarsListComponent} from './cars-list.component';
import {CarDetailComponent} from './car-detail.component';
import {CarFormComponent} from './car-form.component';
import {AboutComponent} from './about.component';
import {HomeComponent} from './home.component';

import {AlunoService} from './aluno.service';
import {CarService} from './car.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/home.html',
  providers: [AlunoService, CarService],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
		{ path: '/home', name: 'HomeTeste', component: HomeComponent, useAsDefault: true },
		{ path: '/alunos', name: 'AlunosList', component: AlunosListComponent },
		{ path: '/cars', name: 'CarsList', component: CarsListComponent },
		{ path: '/car/create', name: 'CarForm', component: CarFormComponent },
		{ path: '/car/:id', name: 'CarDetail', component: CarDetailComponent },
		{ path: '/about', name: 'About', component: AboutComponent }
])
export class AppComponent {
}
