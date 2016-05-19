'use strict';

if (!global.hasOwnProperty('isFunction')) global.isFunction = isFunction;
if (!global.hasOwnProperty('isNotFunction')) global.isNotFunction = isNotFunction;

/**
 * Check does the given javascript object is a Function.
 *
 * @param {*} object - Javascript object (array, object, string, etc) to check the type from.
 * @returns {boolean}
 */
function isFunction(object) {
    return toString.call(object) === '[object Function]';
}

/**
 * Check does the given javascript object is not a Function.
 *
 * @param {*} object - Javascript object (array, object, string, etc) to check the type from.
 * @returns {boolean}
 */
function isNotFunction(object) {
    return !isFunction(object);
}

module.exports = {isFunction, isNotFunction};
