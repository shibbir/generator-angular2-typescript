import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
<% if (webpack) { %>import {AppModule} from './app/app.module';<% } %><% if (systemjs) { %>import {AppModule} from './app.module';<% } %>

platformBrowserDynamic().bootstrapModule(AppModule);
