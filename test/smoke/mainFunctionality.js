const sel = require('../../data/selectors.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');

describe('Checking the main functionality', function () {
    describe('Happy path', function () {

        it('TC-021 Create button is clickable after 1-4 are filled in', function () {
            browser.url('');
            inputValues4(data.name, data.gender.he, data.age, data.storyType.comedy);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });
    });
    describe('Other paths', function () {

        it('TC-022 gender he and type of the story comedy are working', function () {
            browser.url('');
            inputValues4(data.name, data.gender.he, data.age, data.storyType.comedy);
            $(sel.create).click();
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });
    });
});