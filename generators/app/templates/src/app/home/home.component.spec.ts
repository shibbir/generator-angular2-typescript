import {beforeEachProviders, describe, expect, it, inject} from '@angular/core/testing';

import {HomeComponent} from './home.component';

describe('HomeComponent', () => {
    beforeEachProviders(() => [HomeComponent]);

    it('should create the Home component', inject([HomeComponent], (app: HomeComponent) => {
        expect(app).toBeTruthy();
    }));
});
