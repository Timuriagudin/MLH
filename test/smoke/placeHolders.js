const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');

describe('PlaceHolders', function () {

    describe('Placeholders are displayed', function () {

        it('TC-023 Placeholder for Name) ', function () {
            browser.url('');
            const text = $(sel.name).getAttribute('placeholder');
            expect(text).toEqual(exp.placeHolderName);
        });

        it('TC-024 Placeholder for Age) ', function () {
            const text = $(sel.age).getAttribute('placeholder');
            expect(text).toEqual(exp.placeHolderAge);
        });

        it('TC-025 Placeholder for Type of story) ', function () {
            const text = $(sel.placeHolderStory).getProperty('innerText');
            expect(text).toEqual(exp.placeHolderStory);
        });

        it('TC-026 Placeholder for Upload an image) ', function () {
            const text = $(sel.uploadButton).getProperty('innerText');
            expect(text).toEqual(exp.placeHolderImage);
        });

        it('TC-027 Placeholder for Create button) ', function () {
            const text = $(sel.create).getProperty('innerText');
            expect(text).toEqual(exp.placeHolderCreate);
        });
    });
})