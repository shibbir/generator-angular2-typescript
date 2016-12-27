import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';<% if (ngPackages.ngForms) { %>
import '@angular/forms';<% } %>
import '@angular/router';<% if (ngPackages.ngHttp) { %>
import '@angular/http';<% } %>

import 'rxjs';<% if (bootstrap) { %>

import 'bootstrap/dist/js/bootstrap';<% } %><% if (foundation) { %>

import 'foundation-sites/dist/js/foundation';<% } %>
