import {TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';

describe('HomeComponent', () => {
    beforeEach(() => TestBed.configureTestingModule({ declarations: [HomeComponent] }));

    it('should instantiate the HomeComponent', () => {
        let fixture = TestBed.createComponent(HomeComponent);
        expect(fixture.componentInstance instanceof HomeComponent).toBe(true, 'should create HomeComponent');
    });
});
