import {Component} from '@angular/core';<% if (webpack) { %>
<% if (bootstrap || foundation) { %>
<% if (bootstrap) { %>import 'bootstrap/dist/css/bootstrap.css';<% } %><% if (foundation) { %>import 'foundation-sites/dist/foundation.css';<% } %><% } %>
import '../styles.css';<% } %>

@Component({
    selector: 'my-app',
    <% if (webpack) { %>template: require('./app.component.html')<% } else { %>templateUrl: './app/app.component.html'<% } %>
})

export class AppComponent {
}
