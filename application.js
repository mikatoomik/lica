$('#inline_calendar').calendar({
  eventClass: 'inverted red',
  eventDates: [
    new Date(2020, 3, 6),
    {
      date: new Date(2020, 3, 7),
      message: 'I got the default color (light red)'
    },
    new Date(2020, 3, 8),
    new Date(2020, 3, 9),
    new Date(2020, 3, 10),
    new Date(2020, 3, 11),
    new Date(2020, 3, 12),
    new Date(2020, 3, 13),
    new Date(2020, 3, 14),
    {
      date: new Date(2020, 3, 1),
      class: 'green'
    },
    {
      date: new Date(2020, 3, 2),
      class: 'green'
    },
    {
      date: new Date(2020, 3, 3),
      class: 'green'
    },
    {
      date: new Date(2020, 3, 4),
      class: 'green'
    },
    {
      date: new Date(2020, 3, 5),
      class: 'green'
    }

  ]
});

$('.progress').progress();


var flkty = new Flickity('.main-carousel',
  { "wrapAround": true }
);

function reveleinstruction(e) {
  const instruction = document.querySelector(`div[data-instruction="${e}"]`);
  instruction.classList.remove('hidden');
  instruction.classList.add('visible');
}
function cacheinstruction(visible) {
  visible.classList.remove('visible');
  visible.classList.add('hidden');
}

flkty.on('change', function (index) {
  const visible = document.querySelector('.visible');
  cacheinstruction(visible);
  reveleinstruction(index);
});



