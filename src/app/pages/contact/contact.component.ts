import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

const contactNumber = environment.contactNumber;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {

  message: string = 'Hola Quisiera obtener más información';
  whatsappMessagingUrl: string =  `https://wa.me/${contactNumber}?text=`;
  whatsappMessagingUrlWithMessage: string = this.whatsappMessagingUrl + encodeURIComponent(this.message);

  constructor() {
    // Aquí puedes realizar otras acciones si es necesario

    // Realizar la codificación en el constructor
    const encodedUrl = encodeURIComponent(this.whatsappMessagingUrlWithMessage);
    console.log(encodedUrl); // Muestra la URL codificada en la consola
  }
}
