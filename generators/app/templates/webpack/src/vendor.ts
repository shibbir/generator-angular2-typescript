import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';<% if (angularPackages['@angular/forms']) { %>
import '@angular/forms';<% } %>
import '@angular/router';<% if (angularPackages['@angular/http']) { %>
import '@angular/http';<% } %>

import 'rxjs';<% if (bootstrap) { %>

import 'bootstrap/dist/js/bootstrap';<% } %><% if (foundation) { %>

import 'foundation-sites/dist/foundation';<% } %>
