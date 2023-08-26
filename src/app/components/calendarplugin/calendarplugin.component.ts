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
    events: events,
    eventClick: ()=>{console.log('hola')},
  };

  eventClick() {

  }
}
