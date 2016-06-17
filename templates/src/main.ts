import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {enableProdMode} from '@angular/core';

import {AppComponent} from './app/app.component';

if (process.env.NODE_ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
]).catch(err => console.error(err));
