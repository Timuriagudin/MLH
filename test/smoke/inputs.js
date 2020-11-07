const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');

describe('Inputs', function () {

    describe('Inputs are displayed', function () {

        it('TC-014 Name ', function () {
            browser.url('');
            const name = $(sel.name).isDisplayed();
            expect(name).toEqual(true);
        });
        it('TC-015 Gender (he)', function () {
            const gender = $$(sel.gender)[0].isDisplayed();
            expect(gender).toEqual(true);
        });
        it('TC-016 Gender (she)', function () {
            const gender = $$(sel.gender)[1].isDisplayed();
            expect(gender).toEqual(true);
        });
        it('TC-017 Gender (it)', function () {
            const gender = $$(sel.gender)[2].isDisplayed();
            expect(gender).toEqual(true);
        });
        it('TC-018 Age', function () {
            const label = $(sel.age).isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-019 Story', function () {
            const label = $(sel.story1).isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-020 Create', function () {
            const label = $(sel.create).isDisplayed();
            expect(label).toEqual(true);
        });
    });

    describe('Placeholders are correct', function () {

        it('TC-021 Placeholder for Name) ', function () {
            browser.url('');
            const text = $(sel.name).getAttribute('placeholder');
            expect(text).toEqual(exp.placeHolderName);
        });

        it('TC-022 Placeholder for Gender he) ', function () {
            const text = $$(sel.placeHolderGender)[0].getAttribute('value');
            expect(text).toEqual(exp.placeHolderGenderHe);
        });

        it('TC-023 Placeholder for Gender she) ', function () {
            const text = $$(sel.placeHolderGender)[1].getAttribute('value');
            expect(text).toEqual(exp.placeHolderGenderShe);
        });

        it('TC-024 Placeholder for Gender it) ', function () {
            const text = $$(sel.placeHolderGender)[2].getAttribute('value');
            expect(text).toEqual(exp.placeHolderGenderIt);
        });

        it('TC-025 Placeholder for Age) ', function () {
            const text = $(sel.age).getAttribute('placeholder');
            expect(text).toEqual(exp.placeHolderAge);
        });

        it('TC-026 Placeholder for Type of story) ', function () {
            const text = $(sel.placeHolderStory).getProperty('innerText');
            expect(text).toEqual(exp.placeHolderStory);
        });

        it('TC-027 Placeholder for Upload an image) ', function () {
            const text = $(sel.uploadButton).getProperty('innerText');
            expect(text).toEqual(exp.placeHolderImage);
        });

        it('TC-028 Placeholder for Create button) ', function () {
            const text = $(sel.create).getProperty('innerText');
            expect(text).toEqual(exp.placeHolderCreate);
        });
    });
})