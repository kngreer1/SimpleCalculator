import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Calculator} from '../calculator/calculator'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public nav: NavController) {

  }

 itemTapped() {
        this.nav.push(Calculator);
    }

}
