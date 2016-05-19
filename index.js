(function() {
    'use strict';

    if (!window.hasOwnProperty('isFunction')) window.isFunction = isFunction;
    if (!window.hasOwnProperty('isNotFunction')) window.isNotFunction = isNotFunction;

    function isFunction(object) {
        return toString.call(object) === '[object Function]';
    }

    function isNotFunction(object) {
        return !isFunction(object);
    }
})();
