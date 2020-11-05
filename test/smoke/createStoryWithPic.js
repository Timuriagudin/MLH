const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');
const path = require('path')

describe('Create a story with an image', function () {

    describe('Create button is clickable after all fields are filled in', function () {

        it('TC-031 Create the story with a picture', function () {
            browser.url('');
            inputValues4(data.name, data.gender.he, data.age, data.storyType.Comedy);
            const inputDiv = $('.ant-upload input');
            const submitBtn = $(sel.create);
            const filePath = path.join(__dirname, '../../data/liberty.jpg');
            const remoteFilePath = browser.uploadFile(filePath);
            browser.execute(function () {
                document.getElementsByTagName('input')[6].style.display = "block";
            });
            inputDiv.waitForDisplayed();
            inputDiv.setValue(remoteFilePath);
            submitBtn.click();
            browser.pause(6000);
        });
    });
});