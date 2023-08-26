import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import { events } from '../../../assets/data/events'; // Importa el array de eventos

@Component({
  selector: 'app-calendarplugin',
  templateUrl: './calendarplugin.component.html',
  styleUrls: ['./calendarplugin.component.css']
})
export class CalendarPluginComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin,bootstrap5Plugin],
    events: events
  };
  eventClick = function(info) {
    alert('Event: ' + info.event.title);
    alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
    alert('View: ' + info.view.type);

    // change the border color just for fun
    info.el.style.borderColor = 'red';
  }
}
