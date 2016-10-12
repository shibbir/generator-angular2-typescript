'use strict';

describe('About Page', () => {
    beforeEach(() => {
        browser.get('/about');
    });

    it('should have h3 header', () => {
        let subject = element(by.tagName('h3')).isPresent();
        expect(subject).toEqual(true);
    });

    it('should have h3 header with "About Page" text', () => {
        let subject = element(by.tagName('h3'));
        expect(subject.getText()).toBe('About Page');
    });
});
