import Ember from 'ember';

export default Ember.Controller.extend({
  // QP defined on this controller
  queryParams: ['search', 'page'],

  // Properties holding values of the QPs
  search: '',
  page: 1,


  /**
   * CP returning number of the next page
   */
  nextLink: Ember.computed('page', function() {
    let candidate = parseInt(this.get('page')) + 1;
    let total = parseInt(this.get('model.photos.pages'));

    return candidate >= total ? (total === 0 ? 1 : total) : candidate;
  }),

  /**
   * CP returning number of the previous page (unless is is not less than 1)
   */
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

  // A property updated from root, indicating if model is loading or if it has finished loading
  // It is used to display the loading indicator.
  modelIsLoading: true,

  /**
   * Method executing search
   * @param s - search string from search input
   */
  executeSearch(s) {
    if (s != '') {
      this.setProperties({
        search: s,
        page: 1
      });
    }
  },

  actions: {
    /**
     * Action accepting a search string and passing it sto `executeSearch` controller method
     * @param e - search string
     */
    handleEnterOnSearchInput(e) {
      this.executeSearch(e);
    },

    /**
     * Action fired after clicking the search icon in the input.
     */
    executeSearchWithSearchIcon() {
      let val = $('.flickr-search-input').val();
      if(val) {
        this.executeSearch(val);
      }
    }
  }
});
