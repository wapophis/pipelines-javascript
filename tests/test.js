var assert = require('assert');

describe('String', function () {
    describe('#indexOf', function () {
        it('should return -1 when the substring is not present', function () {
            var myString = 'test';

            assert.equal(-1, myString.indexOf('x'));
            assert.equal(-1, myString.indexOf('y'));
        });
    });
    
      describe('#indexOfFailing', function () {
        it('should return 0 when the substring is not present', function () {
            var myString = 'test';

            assert.equal(0, myString.indexOf('x'));
            assert.equal(0, myString.indexOf('y'));
        });
    });
});
