// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    //add event listeners
    this.on('add', this.enqueue, this);
    this.on('remove', this.playNext, this);
    this.on('ended', this.dequeue, this);



    this.on('enqueue', this.enqueue, this);
    this.on('dequeue', this.deQueue, this);

  },

  enqueue: function() {
    if (this.models.length === 1) {
      this.playFirst();
    }
  },

  playFirst: function() {
      this.models[0].play;
  },

  dequeue: function() {
    this.shift();
    if (this.models.length >= 1) {
      this.playFirst();
    }
  },

  playNext: function() {
    //WARNING
    if(this.models.length >= 1) {
      this.models[0].play;
    }
  }



  //
  //
  // removeFromQueue: function(song) {
  //   this.remove(song);
  // },


});
