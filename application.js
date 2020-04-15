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

const cells = Array.from(document.querySelectorAll('.carousel-cell'));
cells.forEach(cell => cell.addEventListener('change', console.log(cell.id)));
