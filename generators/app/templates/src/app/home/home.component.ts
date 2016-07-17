import {Component} from '@angular/core';

@Component({
    selector: 'home',
    <% if (webpack) { %>template: require('./home.component.html')<% } else { %>templateUrl: './app/home/home.component.html'<% } %>
})

export class HomeComponent {
}
