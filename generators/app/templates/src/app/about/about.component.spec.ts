import {TestBed} from '@angular/core/testing';

import {AboutComponent} from './about.component';

describe('AboutComponent', () => {
    beforeEach(() => TestBed.configureTestingModule({ declarations: [AboutComponent] }));

    it('should instantiate the AboutComponent', () => {
        let fixture = TestBed.createComponent(AboutComponent);
        expect(fixture.componentInstance instanceof AboutComponent).toBe(true, 'should create AboutComponent');
    });
});
