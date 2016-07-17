import {Component} from '@angular/core';

@Component({
    selector: 'about',
    <% if (webpack) { %>template: require('./about.component.html')<% } else { %>templateUrl: './app/about/about.component.html'<% } %>
})

export class AboutComponent {
}
