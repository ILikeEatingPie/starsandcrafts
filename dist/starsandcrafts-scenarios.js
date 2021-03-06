SC = SC || {};
SC.Scenarios = {


  // the planetoid/asteroid
  "eros": function(server) {

    var eros = new SC.Model('../models/eros.stl', server)
    server.objects.push(eros);

    return eros;

  },


  // makes 200 asteroids
  "asteroids": function(server) {

    var asteroids = [];

    for ( var i = 0; i < 200; i ++ ) {

      asteroids.push(new SC.Asteroid(server));

    }

    server.objects = server.objects.concat(asteroids);

    return asteroids;

  },


  // the planetoid/asteroid
  "comet": function(server) {

    // needs debugging in size, trajectory, particle size, cone shape, turbulence on mobile
    var comet = new SC.Comet(server);
    server.objects.push(comet);

    return comet;

  },


  "fog": function(server) {

    // not working: 
 
//    server.scene.fog = new THREE.Fog( 0x000000, 3500, 15000 );
//    server.scene.fog.color.setHSL( 0.51, 0.4, 0.01 );
 
  }

}
