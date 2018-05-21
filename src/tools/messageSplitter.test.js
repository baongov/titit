var assert = require('assert');

import { splitMessage } from './messageSplitter';

describe('Spliting a message having less than 50 characters.', function(){
    it('Empty string.', () => {
        var input = "";
        var output = [""];

        assert.deepEqual(splitMessage(input), output);
    });

    it('A message less than 50 characters.', () => {
        var input = "This text is less than 50 characters.";
        var output = ["This text is less than 50 characters."];

        assert.deepEqual(splitMessage(input), output);
    });

    it('A message has exactly 50 characters.', () => {
        var input = "This in-put mes-sage has e-xactly 50 cha-rac-ters.";
        var output = ["This in-put mes-sage has e-xactly 50 cha-rac-ters."];

        assert.deepEqual(splitMessage(input), output);
    });
})

describe('Spliting a message having more than 50 characters.', function () {
    it('A message contains a span of non-whitespace character cause error.', () => {
        var input = "Amessagecontainsaspanofnon-whitespacecharactercauseerror";
        var output = "Error while splitting message."

        assert.deepEqual(splitMessage(input), output);
    });

    it('A message contains a span of non-whitespace character cause error.', () => {
        var input = "Testing Amessagecontainsaspanofnon-whitespacecharactercauseerror";
        var output = "Error while splitting message."

        assert.deepEqual(splitMessage(input), output);
    });

    it('A common message return 2 chunks.', () => {
        var input = "I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself.";
        var output = [
            "1/2 I can't believe Tweeter now supports chunking",
            "2/2 my messages, so I don't have to do it myself."
        ];

        assert.deepEqual(splitMessage(input), output);
    });

    it('A common message return more than 10 chunks.', () => {
        var input = "Sometimes after school I meet up with teachers, and together we tell stories and we laugh and we rant about 'the system' like the annoying idealists we are. And on some of these nights, after hours of conversations about curriculum and debates over pedagogy, someone slips in the simple question: How often do you think about shootings? The last time I heard this question asked, another teacher quietly responded, 'Every day.' And then the question floated away on the May breeze and we were back to ordering drinks and enjoying wings and planning our summer s. ";
        var output = ["1/14 Sometimes after school I meet up with",
            "2/14 teachers, and together we tell stories and we",
            "3/14 laugh and we rant about 'the system' like the",
            "4/14 annoying idealists we are. And on some of",
            "5/14 these nights, after hours of conversations",
            "6/14 about curriculum and debates over pedagogy,",
            "7/14 someone slips in the simple question: How",
            "8/14 often do you think about shootings? The last",
            "9/14 time I heard this question asked, another",
            "10/14 teacher quietly responded, 'Every day.' And",
            "11/14 then the question floated away on the May",
            "12/14 breeze and we were back to ordering drinks",
            "13/14 and enjoying wings and planning our summer",
            "14/14 s. "];

        assert.deepEqual(splitMessage(input), output);
    });

    describe('A message contains special characters.', function () {
        it('A message contain special characters.', () => {
            var input = "The last time I heard this question asked, another teacher quietly responded, &quot;Every day.&quot;";
            var output = [
                "1/3 The last time I heard this question asked,", 
                "2/3 another teacher quietly responded, &quot;Every",
                "3/3 day.&quot;"
            ];

            assert.deepEqual(splitMessage(input), output);
        });

        it('A message contain multiple side-by-side space character.', () => {
            var input = "I     can't    believe    Tweeter    now    supports    chunking    my    messages.  ";
            var output = [
                "1/2 I     can't    believe    Tweeter    now   ",
                "2/2 supports    chunking    my    messages.  "
            ];

            assert.deepEqual(splitMessage(input), output);
        });

    });
})
