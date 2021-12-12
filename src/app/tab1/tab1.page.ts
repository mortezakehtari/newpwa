import { HttpClient, HttpRequest } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { IonButton, IonIcon, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  assets:any[]=[];
  constructor(public actionSheetController:ActionSheetController,
    private http:HttpClient) {}
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  getData(codep:number){
    const requestURL = `https://localhost:44301/api/assets/${codep}`;
    let request =new HttpRequest('GET',requestURL,)
    this.http.request(request).subscribe(res =>{
      if(res)
       this.assets = res['body']
    })
  }

}
