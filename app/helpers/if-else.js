import Ember from 'ember';

/**
 * A helper returning second argument if the firs one is truthy. Otherwise it returns the third one.
 * @param {Object} params - hash of params
 * @returns {*}
 */
export function ifElse(params) {
  return params[0] ? params[1] : params[2];
}

export default Ember.Helper.helper(ifElse);
