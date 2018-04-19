import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import { ToastService } from '../../providers/toast.service';
import { LoadingService } from '../../providers/loading.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private afAuth : AngularFireAuth,public navCtrl: NavController, public ts : ToastService,
     public ls : LoadingService, public navParams: NavParams) {}

  login(){
    this.ls.show();
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).
      then((result) => {
      if (result){
        this.ls.dimiss();
        this.navCtrl.setRoot('HomePage');
      }
      else {
        this.ts.show("Something is wrong! Please consult our customer services",3000);
      }
    });
  }


}
