// message.component.ts

import { Component } from '@angular/core';
import { SmsService } from 'src/app/services/sms.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  selectedPrefix: string = ""; // Inizializza selectedPrefix con un valore predefinito, ad esempio "+1"
  phoneNumber: string = "";
  fullPhoneNumber=this.selectedPrefix+this.phoneNumber;
  message: string = "";
  smsSent: boolean = false;

  constructor(private smsService: SmsService) {}

  sendSMS() {
    this.fullPhoneNumber = this.selectedPrefix + this.phoneNumber; // Combinazione di prefisso e numero di telefono
    this.smsService.sendSMS(this.fullPhoneNumber, this.message).subscribe(
      () => {
        this.smsSent = true;
      },
      (error) => {
        console.error('Errore durante l\'invio SMS:', error);
        // Gestisci errori qui, ad esempio mostrando un messaggio all'utente
      }
    );
    this.clearForm();
  }

  

  clearForm() {
    this.phoneNumber = '';
    this.message = '';
  }
}
