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
      content_type: 1 // Only "photos"
    });

    console.log('query params: ', queryParams);

    if (params.search) {
      return fetch(config.flickrApiEndpoint + queryParams)
        .then(r => r.json());
    }
  }
});
