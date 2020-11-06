const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues5AndClick = require ('../../helpers/inputValues5AndClick');
const path = require ('path');

describe('Create a story with an image', function () {

    describe('Create button is clickable after all fields are filled in', function () {

        it('TC-032 Create the story with all fields filled ("he" and "Over Coming The Monster")', function () {
            browser.url('');
            inputValues5AndClick(data.name, data.gender.he, data.age, data.storyType.overcomingTheMonster);
        });
        it('TC-032 Create the story with all fields filled ("he" and "Rebirth")', function () {
            browser.url('');
            inputValues5AndClick(data.name, data.gender.he, data.age, data.storyType.rebirth);
        });
        it('TC-033 Create the story with all fields filled ("he" and "Quest")', function () {
            browser.url('');
            inputValues5AndClick(data.name, data.gender.he, data.age, data.storyType.Quest);
        });
        it('TC-034 Create the story with all fields filled ("he" and "Journey and Return")', function () {
            browser.url('');
            inputValues5AndClick(data.name, data.gender.he, data.age, data.storyType.journeyAndReturn);
        });
        it('TC-035 Create the story with all fields filled ("he" and "Rags and Riches")', function () {
            browser.url('');
            inputValues5AndClick(data.name, data.gender.he, data.age, data.storyType.ragsAndRiches);
        });
        it('TC-036 Create the story with all fields filled ("he" and "Tragedy")', function () {
            browser.url('');
            inputValues5AndClick(data.name, data.gender.he, data.age, data.storyType.tragedy);
        });
        it('TC-037 Create the story with all fields filled ("he" and "Comedy")', function () {
            browser.url('');
            inputValues5AndClick(data.name, data.gender.he, data.age, data.storyType.comedy);
        });
        it('TC-038 Create the story with all fields filled ("she" and "Overcoming the Monster")', function () {
            browser.url('');
            inputValues5AndClick(data.name, data.gender.she, data.age, data.storyType.overcomingTheMonster);
        });
        it('TC-039 Create the story with all fields filled ("she" and "Rebirth")', function () {
            browser.url('');
            inputValues5AndClick(data.name, data.gender.she, data.age, data.storyType.rebirth);
        });
        it('TC-040 Create the story with all fields filled ("she" and "Quest")', function () {
            browser.url('');
            inputValues5AndClick(data.name, data.gender.she, data.age, data.storyType.Quest);
        });
        it('TC-041 Create the story with all fields filled ("she" and "Journey and Return")', function () {
            browser.url('');
            inputValues5AndClick(data.name, data.gender.she, data.age, data.storyType.journeyAndReturn);
        });
        it('TC-042 Create the story with all fields filled ("she" and "Rags and Riches")', function () {
            browser.url('');
            inputValues5AndClick(data.name, data.gender.she, data.age, data.storyType.ragsAndRiches);
        });
        it('TC-043 Create the story with all fields filled ("she" and "Tragedy")', function () {
            browser.url('');
            inputValues5AndClick(data.name, data.gender.she, data.age, data.storyType.tragedy);
        });
        it('TC-044 Create the story with all fields filled ("she" and "Comedy")', function () {
            browser.url('');
            inputValues5AndClick(data.name, data.gender.she, data.age, data.storyType.comedy);
        });
        it('TC-045 Create the story with all fields filled ("it" and "Overcoming the Monster")', function () {
            browser.url('');
            inputValues5AndClick(data.name, data.gender.it, data.age, data.storyType.overcomingTheMonster);
        });
        it('TC-046 Create the story with all fields filled ("it" and "Rebirth")', function () {
            browser.url('');
            inputValues5AndClick(data.name, data.gender.it, data.age, data.storyType.rebirth);
        });
        it('TC-047 Create the story with all fields filled ("it" and "Quest")', function () {
            browser.url('');
            inputValues5AndClick(data.name, data.gender.it, data.age, data.storyType.Quest);
        });
        it('TC-048 Create the story with all fields filled ("it" and "Journey and Return")', function () {
            browser.url('');
            inputValues5AndClick(data.name, data.gender.it, data.age, data.storyType.journeyAndReturn);
        });
        it('TC-049 Create the story with all fields filled ("it" and "Rags and Riches")', function () {
            browser.url('');
            inputValues5AndClick(data.name, data.gender.it, data.age, data.storyType.ragsAndRiches);
        });
        it('TC-050 Create the story with all fields filled ("it" and "Tragedy")', function () {
            browser.url('');
            inputValues5AndClick(data.name, data.gender.it, data.age, data.storyType.tragedy);
        });
        it('TC-051 Create the story with all fields filled ("it" and "Comedy")', function () {
            browser.url('');
            inputValues5AndClick(data.name, data.gender.it, data.age, data.storyType.comedy);
        });
    });
});