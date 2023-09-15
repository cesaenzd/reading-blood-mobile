import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { SafeResourceUrl } from '@angular/platform-browser';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  picture: SafeResourceUrl | undefined;
  all = 99999;
  red = 99999;
  white = 99999;

  constructor(private homeService: HomeService,) {}

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
    const jsonRequest = {
      image: imageBase64
    };

    await this.homeService.sendImage(jsonRequest).subscribe(
      (res) => {
        this.picture = "data:image/jpeg;base64," + res.image;
        this.all = res.all;
        this.red = res.red;
        this.white = res.white;
      },
      (err) => {
        console.log(err)
      }
    );
  };

}
