import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['search', 'page'],
  search: '',
  page: 1,

  nextLink: Ember.computed('page', function() {
    let candidate = parseInt(this.get('page')) + 1;
    let total = parseInt(this.get('model.photos.pages'));

    return candidate >= total ? total : candidate;
  }),

  prevLink: Ember.computed('page', function() {
    let candidate = parseInt(this.get('page')) - 1;

    return candidate < 1 ? 1 : candidate;
  }),

  modelIsLoading: true,

  actions: {
    executeSearch(e) {
      this.setProperties({
        search: e,
        page: 1
      });
    }
  }
});
