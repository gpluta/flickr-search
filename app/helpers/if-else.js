import Ember from 'ember';

export function ifElse(params) {
  return params[0] || params[2];
}

export default Ember.Helper.helper(ifElse);
