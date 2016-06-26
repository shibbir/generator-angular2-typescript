import {beforeEachProviders, describe, expect, it, inject} from '@angular/core/testing';

import {AppComponent} from './app.component';

describe('App', () => {
    beforeEachProviders(() => [AppComponent]);

    it('should create the app component', inject([AppComponent], (app: AppComponent) => {
        expect(app).toBeTruthy();
    }));
});
