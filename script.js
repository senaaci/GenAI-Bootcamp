function openVideoPopup() {
    var popup = document.getElementById("videoPopup");
    popup.style.display = "block";
}

function closeVideoPopup() {
    var popup = document.getElementById("videoPopup");
    popup.style.display = "none";
}
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth', // Takvim başlangıç görünümü
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: [
        // Etkinlikler buraya eklenecek
        {
          title: 'Sanat Sergisi',
          start: '2024-03-01',
          end: '2024-03-03'
        },
        {
          title: 'Özel Rehberli Tur',
          start: '2024-03-15T10:00:00',
          end: '2024-03-15T14:00:00'
        }
        // Ek etkinlikler buraya eklenecek
      ]
    });
  
    calendar.render();
  });
  