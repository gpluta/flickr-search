import Ember from 'ember';
import fetch from 'fetch';
import config from '../config/environment';

export default Ember.Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    },

    page: {
      refreshModel: true
    }
  },

  model(params) {
    let queryParams = $.param({
      method: 'flickr.photos.search',
      api_key: config.flickrApiKey,
      per_page: 10,
      format: 'json',
      nojsoncallback: 1, // We want plain json, not jsonp
      text: params.search,
      page: params.page,
      privacy_filter: 1, // Show only public photos
      content_type: 1, // Only "photos"
    });

    this.set('previousSearch', params.search);

    if (params.search) {
      return fetch(config.flickrApiEndpoint + queryParams)
        .then(r => r.json());
    }
  },

  // A poperty holding the most recently performed search text value
  previousSearch: '',

  setupController(controller, model) {
    this._super(controller, model);

    this.controller.setProperties({
      previousSearch: this.get('previousSearch')
    });
  },

  actions: {
    refreshModel() {
      this.refresh();
    },

    loading() {
      this.controllerFor('index').setProperties({
        modelIsLoading: true
      });
    },

    didTransition() {
      this.controllerFor('index').setProperties({
        modelIsLoading: false
      });
    }
  }
});
