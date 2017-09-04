import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html'
})
export class Calculator {
fstNum: string;
scdNum: string;
result: number = 0;

  constructor(public alertCtrl: AlertController) {
  }


add(){
  console.log("Add function called");

if(this.fstNum == "" ){
  this.Alert1();
  return false;
}
if(/\D/.test(this.fstNum)){
  this.Alert1();
  return false;
}
if(this.scdNum == "" ){
  this.Alert2();
    return false;
}
if(/\D/.test(this.scdNum)){
  this.Alert2();
  return false;
}
if(isNaN(parseFloat(this.fstNum))){
  this.Alert1();
    return false;
}
if(isNaN(parseFloat(this.scdNum))){
  this.Alert2();
    return false;
}



 this.result = parseFloat(this.fstNum) + parseFloat(this.scdNum);

console.log("Result = " + this.result);
}

minus(){
    console.log("Minus function called");

if(this.fstNum == "" ){
  this.Alert1();
  return false;
}
if(this.scdNum == "" ){
  this.Alert2();
    return false;
}
if(isNaN(parseFloat(this.fstNum))){
  this.Alert1();
    return false;
}
if(isNaN(parseFloat(this.scdNum))){
  this.Alert2();
    return false;
}

 this.result = parseFloat(this.fstNum) - parseFloat(this.scdNum);

console.log("Result = " + this.result);
}

  
  multiply(){
      console.log("Multiply function called");

if(this.fstNum == "" ){
  this.Alert1();
  return false;
}
if(this.scdNum == "" ){
  this.Alert2();
    return false;
}
if(isNaN(parseFloat(this.fstNum))){
  this.Alert1();
    return false;
}
if(isNaN(parseFloat(this.scdNum))){
  this.Alert2();
    return false;
}
 this.result = parseFloat(this.fstNum) * parseFloat(this.scdNum);
 console.log("Result = " + this.result);
  }
  



  divide(){
  console.log("Divide function called");

if(this.fstNum == "" ){
  this.Alert1();
  return false;
}
if(this.scdNum == "" ){
  this.Alert2();
    return false;
}
if(isNaN(parseFloat(this.fstNum))){
  this.Alert1();
    return false;
}
if(isNaN(parseFloat(this.scdNum))){
  this.Alert2();
    return false;
}

 this.result = parseFloat(this.fstNum) / parseFloat(this.scdNum);

console.log("Result = " + this.result);
  }
  
  clear(){
 
    this.fstNum = ""

    this.scdNum = ""

    this.result = 0
  }
  
  
  Alert1() {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: 'Please enter your first number',
      buttons: ['OK']
    });
    alert.present()
  };

  Alert2() {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: 'Please enter your second number',
      buttons: ['OK']
    });
    alert.present();
  }


}
