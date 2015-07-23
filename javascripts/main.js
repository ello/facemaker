(function() {
  (function() {
    var initialize;
    return (initialize = function() {
      var facemakerObj;
      facemakerObj = new ElloImageEditor(document.querySelector('.facemaker'), 800);
      if (/chrome|firefox/i.test(navigator.userAgent.toLowerCase())) {
        return setTimeout((function() {
          return console.log("%c ELLO FACEMAKER ", ["background: #333333", "color: white"].join(";"));
        }), 100);
      }
    })();
  })();

}).call(this);
