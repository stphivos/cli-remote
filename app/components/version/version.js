'use strict';

angular.module('CliRemoteApp.version', [
  'CliRemoteApp.version.interpolate-filter',
  'CliRemoteApp.version.version-directive'
])

.value('version', '0.1');
