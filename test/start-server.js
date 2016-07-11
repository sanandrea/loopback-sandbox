module.exports = function(done) {
  if (app.loaded) {
    app.once('started', done);
    app.start();
  } else {
  	console.log('app has not yet loaded')
    app.once('loaded', function() {
      app.once('started', done);
      app.start();
    });
  }
};

