// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', this.playInLine, this);
    this.on('ended', this.dequeue, this);
    this.on('dequeue', this.dequeue, this);
    this.on('endSong', this.dequeue, this);
  },

  playInLine: function(song) {
    if (this.length === 1) {
      this.playFirst();
    }
  },

  playFirst: function() {
    this.models[0].play();
  },

  dequeue: function(song) {
    this.remove(song);

    if (this.models.length >= 1) {
      this.playFirst();
    }
    this.trigger('reRender', this);
  }
});
