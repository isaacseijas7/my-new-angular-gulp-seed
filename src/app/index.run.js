(function() {
  'use strict';

  angular
    .module('wikiKnowHow')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
