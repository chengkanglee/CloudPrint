import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { ToastService } from '../../providers/toast.service';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user : any;

  constructor(public navCtrl: NavController, public afAuth : AngularFireAuth,
      public ts : ToastService) {}

    submitPrintJob(){
      this.user = this.afAuth.auth.currentUser;
      // this.user.subscribe((data) => {
      //   console.log(data);
      // })
      console.log(this.user);
    }

    signOut(){
      this.afAuth.auth.signOut().then(() =>{
        this.navCtrl.setRoot('LoginPage');
      });
    }

}
