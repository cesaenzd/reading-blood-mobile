import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  picture: SafeResourceUrl | undefined;

  constructor() {}

  public async takePicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      saveToGallery: false,
      presentationStyle: 'fullscreen',
      source: CameraSource.Camera
    });
  
    var imageBase64 = image.base64String;
    this.picture = "data:image/jpeg;base64," + imageBase64;
  };

}
