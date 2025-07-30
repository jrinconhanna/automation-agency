particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#1a73e8" },
    "opacity": { "value": 0.8, "random": false },
    "shape": { "type": "circle" },
    "size": { "value": 2, "random": true },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#1a73e8",
      "opacity": 0.4,
      "width": 1
    },
    "move": { "enable": true, "speed": 4 }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "repulse": { "distance": 100 },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});

