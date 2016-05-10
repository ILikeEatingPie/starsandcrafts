var peer, conn;

(function() {


  var getUrlHashParameter = function(sParam) {

    var sPageURL = window.location.hash;
    if (sPageURL) sPageURL = sPageURL.split('#')[1];
    var sURLVariables = sPageURL.split('&');
 
    for (var i = 0; i < sURLVariables.length; i++) {
 
      var sParameterName = sURLVariables[i].split('=');
 
      if (sParameterName[0] == sParam) {
        return sParameterName[1];
      }
 
    }

  }


  $('.connect').click(function() {

    connect();

  });


  // peer connecting
  var connect = function() {
 
    var key = getUrlHashParameter('key');

    $('.alert').html('Connecting to server ' + key);
    $('.alert').addClass('alert-warning');
    $('.alert').removeClass('alert-success');
 
    peer = new Peer(key + '-helm', {key: 'wapghotvz0s2x1or'});
 
    conn = peer.connect(key);
    console.log('Peer created: ', peer);
 
    conn.on('open', function(){
 
      $('.alert').html('Connected to server ' + key);
      $('.alert').addClass('alert-success');
      $('.alert').removeClass('alert-warning');
 
      $('.command').on('mousedown', function() {
        console.log($(this).attr('data-command'));
        conn.send($(this).attr('data-command'));
      });
 
      $(document).on('keydown', function(e) {
        console.log(e.which)
        if ( e.which == 38 ) conn.send('up')
        if ( e.which == 40 ) conn.send('down')
        if ( e.which == 37 ) conn.send('left')
        if ( e.which == 39 ) conn.send('right')
        if ( e.which == 81 ) conn.send('tiltleft')
        if ( e.which == 69 ) conn.send('tiltright')
      });
 
    });

  }

  connect();

})();