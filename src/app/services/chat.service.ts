import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Message {
  key?: string | null;
  user: string;
  message: string;
  timestamp: number;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private dbPath = '/messages';
  messagesRef: AngularFireList<Message>;

  constructor(private db: AngularFireDatabase) {
    this.messagesRef = db.list(this.dbPath); // Inizializza il riferimento al percorso del database
  }

  getMessages(): Observable<Message[]> {
    // Ottieni e mappa i messaggi da Firebase Realtime Database
    return this.messagesRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => {
          const data = c.payload.val() as Message;
          data.key = c.payload.key; // Assegna la chiave del messaggio
          return data;
        })
      )
    );
  }

  sendMessage(msg: Message): void {
    msg.timestamp = new Date().getTime(); // Imposta il timestamp del messaggio
    this.messagesRef.push(msg); // Invia il messaggio al database
  }
}
