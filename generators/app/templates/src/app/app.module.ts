import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';<% if (ngPackages.ngForms) { %>
import {FormsModule} from '@angular/forms';<% } %><% if (ngPackages.ngHttp) { %>
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
        BrowserModule,<% if (ngPackages.ngForms) { %>
        FormsModule,<% } %><% if (ngPackages.ngHttp) { %>
        HttpModule,
        JsonpModule,<% } %>
        routing
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})

export class AppModule {
}
