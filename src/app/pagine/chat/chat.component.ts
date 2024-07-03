import { Component, OnInit } from '@angular/core';

interface Message {
  user: string;
  message: string;
  timestamp: number;
  deleted?: boolean; // Proprietà per segnare se il messaggio è stato eliminato
  showDeleteButton?: boolean; // Proprietà per mostrare il pulsante di eliminazione
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];
  newMessage: string = '';
  user: string = 'User'; // Puoi cambiare questo per ottenere dinamicamente l'utente se necessario

  constructor() {}

  ngOnInit(): void {
    // Inizializza i messaggi (puoi caricarli dal servizio o dal localStorage)
    this.messages = [
      { user: 'Alice', message: 'Ciao!', timestamp: Date.now() },
      { user: 'Bob', message: 'Salve!', timestamp: Date.now() }
    ];
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      const msg: Message = {
        user: this.user,
        message: this.newMessage,
        timestamp: Date.now(),
        deleted: false,
        showDeleteButton: false
      };
      this.messages.push(msg);
      this.newMessage = '';
    }
  }

  showDeleteButton(msg: Message): void {
    msg.showDeleteButton = true;
  }

  hideDeleteButton(msg: Message): void {
    msg.showDeleteButton = false;
  }

  deleteMessage(msg: Message): void {
    msg.deleted = true;
  }
}
