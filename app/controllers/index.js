import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['search', 'page'],
  search: 'agha',
  page: 1,

  nextLink: Ember.computed('page', function() {
    let candidate = parseInt(this.get('page')) + 1;

    let total = parseInt(this.get('model.photos.pages'));

    console.log('total, in computed prop', this.model);
    return candidate >= total ? total : candidate;
  }),

  prevLink: Ember.computed('page', function() {
    let candidate = parseInt(this.get('page')) - 1;
    return candidate < 1 ? 1 : candidate;
  }),

  actions: {
    performSearch(e) {
      this.set('search', e);
    },

    debug() {
      console.log(`
page: ${this.get('page')}
search: ${this.get('search')}
model.total ${this.get('model').photos.total}
model.pages ${this.get('model').photos.pages}
     `);
    }
  }
});
