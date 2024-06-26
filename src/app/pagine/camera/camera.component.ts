import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent {
  photo: string | undefined;

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

      this.photo = image.dataUrl;
    } catch (error) {
      console.error('Error taking photo', error);
    }
  }

}
