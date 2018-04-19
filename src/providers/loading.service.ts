import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class LoadingService {
  loading : any;
  constructor(public ls : LoadingController){}

  show(){
      this.loading = this.ls.create({
          content : "Please wait...."
        });
      return this.loading.present();
    }

  dimiss(){
    if (this.loading){
      return this.loading.dismiss();
    }
  }

}
