import {Component} from '@angular/core';
import {Route, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    new Route({ path: '/', component: HomeComponent, name: 'Home', useAsDefault: true }),
    new Route({ path: '/about', component: AboutComponent, name: 'About' })
])

export class AppComponent {
}
