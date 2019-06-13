import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public firstname:string="";
public lastname:string="";
public age:number;


  constructor(public navCtrl: NavController,public toastController: ToastController) {

  }
  goDetailsPage(){
    if(this.firstname==""){
    const toast =  this.toastController.create({
      message: 'firstname cannot be empty.',
      duration: 2000
    });
    toast.present();
  }else if (this.lastname==""){
    const toast =  this.toastController.create({
      message: 'lastname cannot be empty.',
      duration: 2000
    });
    toast.present();
  }else if (this.age == null){
    const toast =  this.toastController.create({
      message: 'age cannot be empty.',
      duration: 2000
    });
    toast.present();
  }else{
    let text = this.firstname + ' ' + this.lastname + '/t'+'You are '+this.age +' years old';

    this.navCtrl.push(DetailsPage, {data: text});
  }

}
}

