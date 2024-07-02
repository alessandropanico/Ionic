import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent {
  photos: string[] = []; // Array per memorizzare le foto
  currentPage = 1; // Pagina corrente
  itemsPerPage = 15; // Numero di foto per pagina

  zoomedPhoto: string | null = null;

  constructor() { }

  async takePhoto() {
    console.log('Taking photo...');
    try {
      const image = await Camera.getPhoto({
        quality: 100, // Imposta la qualità al massimo
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
        saveToGallery: true, // Opzionale: salva la foto nella galleria
      });

      console.log('Photo taken:', image);

      // Aggiungi la foto all'array di foto
      this.photos.push(image.dataUrl ?? '');

    } catch (error) {
      console.error('Error taking photo', error);

      // Gestisci il caso in cui l'utente abbia negato i permessi
      if (error === 'Permission denied') {
        console.error('Permission denied by user');
      }
    }
  }

  // Metodo per eliminare una foto
  deletePhoto(photo: string) {
    this.photos = this.photos.filter(p => p !== photo);
  }

  // Calcola il numero totale di pagine
  totalPages(): number {
    return Math.ceil(this.photos.length / this.itemsPerPage);
  }

  // Restituisce l'array di foto per la pagina corrente
  getCurrentPagePhotos(): string[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.photos.slice(startIndex, startIndex + this.itemsPerPage);
  }

  // Restituisce un array di numeri per la paginazione
  paginationRange(): number[] {
    const total = this.totalPages();
    return Array.from({ length: total }, (_, index) => index + 1);
  }

   // Cambia la pagina corrente
   changePage(page: number) {
    this.currentPage = page;
  }

  // Vai alla pagina successiva
  nextPage() {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
    }
  }

  // Vai alla pagina precedente
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Restituisce le righe di foto per la pagina corrente
  getCurrentPageRows(): string[][] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const pagePhotos = this.photos.slice(startIndex, startIndex + this.itemsPerPage);
    const rows: string[][] = [];
    for (let i = 0; i < pagePhotos.length; i += 5) {
      rows.push(pagePhotos.slice(i, i + 5));
    }
    return rows;
  }

  //------------------------------

  zoomPhoto(photo: string) {
    this.zoomedPhoto = photo;
  }

  closeZoom() {
    this.zoomedPhoto = null;
  }
}
