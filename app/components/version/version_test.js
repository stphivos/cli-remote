'use strict';

describe('CliRemoteApp.version module', function () {
    beforeEach(module('CliRemoteApp.version'));

    describe('version service', function () {
        it('should return current version', inject(function (version) {
            expect(version).toEqual('0.1');
        }));
    });
});
