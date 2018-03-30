$(document).ready(function() {

    $('#calendar').fullCalendar({
      defaultView: 'month',
      selectable: true,
      header: {
        left: 'prev,next',
        center: 'title',
        right: ''
      },
      
      select: function(startDate, endDate) {
          $("#fechaInicio").val(startDate.format());
          $("#fechaFin").val(endDate.format());
          $("#myCalendarModal").modal("show");
      },
      
      navLinks: false, // can click day/week names to navigate views
      editable: true, 
      eventLimit: false, // allow "more" link when too many events
      events: [
        {
          title: 'America vs Junior',
          start: '2018-03-01'
        },
        {
          title: 'Concierto',
          start: '2018-03-07',
          end: '2018-03-10'
        },
        {
          id: 999,
          title: 'America de Cali Libertadores',
          start: '2018-03-09T16:00:00'
        },
        {
          title: 'Misión Carismática Internacional',
          start: '2018-03-11',
          end: '2018-03-13'
        },
        {
          title: 'Mantenimiento',
          start: '2018-03-14T10:30:00',
          end: '2018-03-15T12:30:00'
        },
        {
          title: 'Fiesta Banco de Occidente',
          start: '2018-03-12T12:00:00'
        },
        {
          title: 'Concierto Maluma',
          start: '2018-03-22T14:30:00'
        },
        {
          title: 'Vicente Fernandez',
          start: '2018-03-13T07:00:00'
        },
        {
          title: 'América vs Jaguares',
          start: '2018-03-28T07:00:00'
        }
      ]
      
      /*dayClick: function(date, jsEvent, view) {
        alert('Clicked on: ' + date.format());
        alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
        alert('Current view: ' + view.name);
        
        $(this).css('background-color', 'red');
      }*/
      
    });

  });