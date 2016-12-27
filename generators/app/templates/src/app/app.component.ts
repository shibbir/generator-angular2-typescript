import {Component, OnInit} from '@angular/core';<% if (webpack) { %>
<% if (bootstrap || foundation) { %>
<% if (bootstrap) { %>import 'bootstrap/dist/css/bootstrap.css';<% } %><% if (foundation) { %>import 'foundation-sites/dist/css/foundation.css';<% } %><% } %>
import '../css/main.css';<% } %><% if(foundation) { %>

declare let $: any;<% } %>

@Component({
    selector: 'my-app',
    <% if (webpack) { %>template: require('./app.component.html')<% } else { %>templateUrl: './app/app.component.html'<% } %>
})

export class AppComponent implements OnInit {
    ngOnInit() {
        console.log('AppComponent initializing...');<% if(foundation) { %>
        $(document).foundation();<% } %>
    }
}
