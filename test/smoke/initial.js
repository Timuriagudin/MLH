const sel = require('../../data/selectors.json')
const exp = require('../../data/expected.json')


describe('My Little Hero', function () {

    describe('Getting to the page', function () {

        it('TC-001 Title is correct ', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            let title = browser.getTitle();
            expect(title).toEqual('MLH trial');
        });

    });

    describe('Labels exist', function () {

        it('TC-002 Label for name', function () {
            const label = $$(sel.labelName)[0].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-003 Label for gender', function () {
            const label = $$(sel.labelName)[1].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-004 Label for age', function () {
            const label = $$(sel.labelName)[2].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-005 Label for story', function () {
            const label = $$(sel.labelName)[3].isDisplayed();
            expect(label).toEqual(true);
        });

    });

    describe('Labels are correct', function () {

        it('TC-006 Label for name', function () {
            const label = $$(sel.labelName)[0].getAttribute('title');
            expect(label).toEqual(exp.labelName);
        });

        it('TC-007 Label for gender', function () {
            const label = $$(sel.labelName)[1].getAttribute('title');
            expect(label).toEqual(exp.labelGender);
        });

        it('TC-008 Label for age', function () {
            const label = $$(sel.labelName)[2].getAttribute('title');
            expect(label).toEqual(exp.labelAge);
        });

        it('TC-009 Label for story', function () {
            const label = $$(sel.labelName)[3].getAttribute('title');
            expect(label).toEqual(exp.labelStory);
        });

    });
});