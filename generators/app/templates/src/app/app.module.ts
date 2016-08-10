import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';<% if (angularPackages['@angular/forms']) { %>
import {FormsModule} from '@angular/forms';<% } %><% if (angularPackages['@angular/http']) { %>
import {HttpModule, JsonpModule} from '@angular/http';<% } %>

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from './app.routing';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,<% if (angularPackages['@angular/forms']) { %>
        FormsModule,<% } %><% if (angularPackages['@angular/http']) { %>
        HttpModule,
        JsonpModule,<% } %>
        routing
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})

export class AppModule {
}
