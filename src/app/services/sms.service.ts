import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SmsService {
  private apiKey = '0441f4ad'; // Inserisci qui la tua API Key
  private apiSecret = 'fTwe4v1rA2bzDC40'; // Inserisci qui la tua API Secret
  private baseUrl = 'https://api.nexmo.com/v0.1/messages';

  constructor(private http: HttpClient) { }

  sendSMS(to: string, text: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${btoa(`${this.apiKey}:${this.apiSecret}`)}`
    });

    const body = {
      from: { type: 'sms', number: '+39 3664629084' }, // Il tuo numero Vonage
      to: [{ type: 'sms', number: to }],
      message: {
        content: {
          type: 'text',
          text: text
        }
      }
    };

    return this.http.post(this.baseUrl, body, { headers });
  }
}
