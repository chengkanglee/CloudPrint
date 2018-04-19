import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastService {
  constructor(public ts : ToastController){}

  show(message : string, duration : number){
    return this.ts.create({
      message : message,
      duration : duration
    }).present();
  }
}
