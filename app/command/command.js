'use strict';

angular.module('CliRemoteApp.command', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'command/index.html',
            controller: 'CommandController'
        });
    }])

    .controller('CommandController', ['$scope', function ($scope) {
        $scope.response = '\n$   sudo tcpdump -i enp0s3 -c 2 dst port 443\n';

        $scope.response += 'listening on enp0s3, link-type EN10MB (Ethernet), capture size 262144 bytes\n' +
            '10:00:59.867847 IP 1.2.3.4.53841 > server.https: Flags [S], seq 1418340629 ... length 0\n' +
            '10:00:59.871976 IP 1.2.3.4.53841 > server.https: Flags [S], seq 1071355579 ... length 0\n' +
            '2 packets captured';

        $scope.tools = [
            {
                name: 'ssh',
                options: [
                    {
                        short: '-b',
                        long: 'bind address',
                        value: ''
                    },
                    {
                        short: '-l',
                        long: 'login name',
                        value: ''
                    }
                ]
            },
            {
                name: 'telnet',
                options: []
            },
            {
                name: 'netstat',
                options: []
            },
            {
                name: 'tcpdump',
                options: [
                    {
                        short: '-i',
                        long: 'interface',
                        value: 'enp0s3'
                    }, {
                        short: '-c',
                        long: 'count',
                        value: '2'
                    },
                    {
                        short: '',
                        long: '',
                        value: 'dst port 443'
                    }
                ]
            },
            {
                name: 'ping',
                options: []
            },
            {
                name: 'cat',
                options: []
            }
        ];
        $scope.selectedTool = null;
        $scope.selectTool = function (index) {
            if ($scope.selectedTool != $scope.tools[index]) {
                $scope.selectedTool = $scope.tools[index]
            }
            else {
                $scope.selectedTool = null;
            }
        };
        $scope.runCommand = function () {
            if ($scope.command) {
                $scope.response += '\n$   ' + $scope.command + '\n' + 'command not found';
                $scope.command = '';
            }
        };
    }]);
