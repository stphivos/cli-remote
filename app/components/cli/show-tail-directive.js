'use strict';

angular.module('CliRemoteApp.cli.show-tail-directive', [])

    .directive('showTail', [function () {
        return function (scope, elem, attr) {
            if ($(elem[0]).hasClass('autosize')) {
                autosize($(elem[0]));
            }
            scope.$watch(function () {
                    return elem[0].value;
                },
                function (e) {
                    elem[0].scrollTop = elem[0].scrollHeight;
                });
        }
    }]);
