import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SmsService {
  private baseUrl = 'http://localhost:3000/send-sms'; // URL del backend intermediario

  constructor(private http: HttpClient) { }

  sendSMS(phoneNumber: string, text: string) {
    const body = { phoneNumber, text };
    return this.http.post(this.baseUrl, body);
  }
}
