import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import { events } from '../../../assets/data/events'; // Importa el array de eventos

@Component({
  selector: 'app-calendarplugin',
  templateUrl: './calendarplugin.component.html',
  styleUrls: ['./calendarplugin.component.css'],
})
export class CalendarPluginComponent {
  selectedEvent: any; // Store selected event

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, bootstrap5Plugin],
    events: events,
    eventMouseEnter: (info) => {
      this.selectedEvent = info.event;
      console.log(this.selectedEvent)
    }
  };

}
