import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Contacts, ContactField } from 'ionic-native';

/*
  Generated class for the AddContact page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-contact',
  templateUrl: 'add-contact.html'
})
export class AddContactPage {
	
	newcontact = {
		displayName:'',
		nickname : '',
		phnumber : '',
		phtype : ''
	};

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddContactPage');
  }

  addcontact(newct) {
      var contact = Contacts.create();
      contact.displayName = newct.displayName;
      contact.nickname = newct.nickname;
      
      var contactfield = new ContactField();
      contactfield.type = newct.phtype;
      contactfield.value = newct.phnumber;
      contactfield.pref = true;
      
      var numbersection = [];
      numbersection.push(contactfield);
      contact.phoneNumbers = numbersection;
      
      contact.save().then((contact) => {
          alert('saved');
      }, (error) => {
      alert(error);
      })   
  }
}
