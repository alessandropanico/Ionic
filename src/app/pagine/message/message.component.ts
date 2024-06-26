import { Component } from '@angular/core';
import { SmsService } from 'src/app/services/sms.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {

  phoneNumber: string |any;
  message: string |any;
  smsSent: boolean = false;

  constructor(private smsService: SmsService) {}

  sendSMS() {
    this.smsService.sendSMS(this.phoneNumber, this.message).subscribe(
      () => {
        this.smsSent = true;
      },
      (error) => {
        console.error('Errore durante l\'invio SMS:', error);
        // Gestisci errori qui, ad esempio mostrando un messaggio all'utente
      }
    );
  }
}
