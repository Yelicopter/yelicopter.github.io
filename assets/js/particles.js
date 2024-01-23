window.onload = function () {
  Particles.init({
    // normal options
    selector: '.background',
    maxParticles: 90,
    color: '#E0B2FF',
    speed: 2,
    minDistance: 110,
    connectParticles: true,

    // options for breakpoints
    responsive: [
      {
        breakpoint: 900,
        options: {
          maxParticles: 70,
          connectParticles: true
        }
      }
      , {
        breakpoint: 600,
        options: {
          maxParticles: 40,
          connectParticles: true
        }
      }, {
        breakpoint: 380,
        options: {
          maxParticles: 250,
          connectParticles: false
        }
      }
    ]
  });
};

