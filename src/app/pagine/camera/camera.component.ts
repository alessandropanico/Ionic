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

  constructor() { }

  async takePhoto() {
    console.log('Taking photo...');
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });

      console.log('Photo taken:', image);

      // Aggiungi la foto all'array di foto
      this.photos.push(image.dataUrl ?? '');

    } catch (error) {
      console.error('Error taking photo', error);
    }
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
}
