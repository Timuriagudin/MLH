const sel = require ('../../data/selectors.json');


describe('Checking thr main functionality', function () {

    describe('Happy path', function () {

        it('TC-021 Create button is clickable after 1-4 are filled in', function () {
            browser.url('');
            const inputName = $(sel.name).setValue("Timur");
            const inputGender = $$(sel.gender)[0].click();
            const inputAge = $(sel.age).setValue(123);
            const StoryType = $(sel.storySelection).click();
            const inputStoryType = $$(sel.storyType)[6].click();
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });
    });
});