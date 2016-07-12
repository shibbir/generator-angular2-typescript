import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';<% if (angularPackages['@angular/forms']) { %>
import {disableDeprecatedForms, provideForms} from '@angular/forms';<% } %><% if (angularPackages['@angular/http']) { %>
import {HTTP_PROVIDERS} from '@angular/http';<% } %><% if (systemjs) { %>

import {AppComponent} from './app.component';
import {APP_ROUTER_PROVIDERS } from './app.routes';<% } %><% if (webpack) { %>

import {AppComponent} from './app/app.component';
import {APP_ROUTER_PROVIDERS } from './app/app.routes';

if (process.env.NODE_ENV === 'production') {
    enableProdMode();
}<% } %>

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS<% if (angularPackages['@angular/forms']) { %>,
    disableDeprecatedForms(),
    provideForms()<% } %><% if (angularPackages['@angular/http']) { %>,
    HTTP_PROVIDERS<% } %>
]).catch(err => console.error(err));
