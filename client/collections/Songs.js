// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function(){
    this.url = 'http://parse.sfm6.hackreactor.com/mytunes/classes/songs';
    this.fetch();
  },

  parse: function(response) {
    return response.results;
  }


});
