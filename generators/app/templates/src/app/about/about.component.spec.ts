import {beforeEachProviders, describe, expect, it, inject} from '@angular/core/testing';

import {AboutComponent} from './about.component';

describe('AboutComponent', () => {
    beforeEachProviders(() => [AboutComponent]);

    it('should create the About component', inject([AboutComponent], (app: AboutComponent) => {
        expect(app).toBeTruthy();
    }));
});
