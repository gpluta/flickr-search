import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['search', 'page'],

  search: '',

  page: 1,

  nextLink: Ember.computed('page', function() {
    let candidate = parseInt(this.get('page')) + 1;
    let total = parseInt(this.get('model.photos.pages'));

    return candidate >= total ? (total === 0 ? 1 : total) : candidate;
  }),

  prevLink: Ember.computed('page', function() {
    let candidate = parseInt(this.get('page')) - 1;

    return candidate < 1 ? 1 : candidate;
  }),

  /**
   *  Convert total pages to int (from string)
   */
  totalElements: Ember.computed('model.photos.total', function() {
    return parseInt(this.get('model.photos.total'));
  }),

  modelIsLoading: true,

  executeSearch(s) {
    if (s != '') {
      this.setProperties({
        search: s,
        page: 1
      });
    }
  },

  actions: {
    handleEnterOnSearchInput(e) {
      this.executeSearch(e);
    },

    executeSearchWithSearchIcon() {
      let val = $('.flickr-search-input').val();
      if(val) {
        this.executeSearch(val);
      }
    }
  }
});
