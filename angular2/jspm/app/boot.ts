import 'zone.js';
import 'zone.js/dist/long-stack-trace-zone';
import 'reflect-metadata';

import {bootstrap}        from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent}     from './app.component';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS
]);
