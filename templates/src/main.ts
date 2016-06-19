import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {enableProdMode} from '@angular/core';<% if (angularPackages['@angular/http']) { %>
import {HTTP_PROVIDERS} from '@angular/http';<% } %>

import {AppComponent} from './app/app.component';

if (process.env.NODE_ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent, [
    ROUTER_PROVIDERS<% if (angularPackages['@angular/http']) { %>,
    HTTP_PROVIDERS<% } %>
]).catch(err => console.error(err));
