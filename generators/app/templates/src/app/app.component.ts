import {Component} from '@angular/core';
import {Route, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';<% if (webpack) { %>

<% if (bootstrap) { %>import 'bootstrap/dist/css/bootstrap.css';<% } %><% if (foundation) { %>import 'foundation-sites/dist/foundation.css';<% } %>
import '../styles.css';<% } %>

@Component({
    selector: 'my-app',
    <% if (webpack) { %>template: require('./app.component.html'),<% } else { %>templateUrl: './app/app.component.html',<% } %>
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    new Route({ path: '/', component: HomeComponent, name: 'Home', useAsDefault: true }),
    new Route({ path: '/about', component: AboutComponent, name: 'About' })
])

export class AppComponent {
}
