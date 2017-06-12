import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

ngOnInit() {
  firebase.initializeApp({
      apiKey: "AIzaSyA8PS71XqE3kNNIgRHuH5L3WKpcJOnjE5E",
      authDomain: "ng-recipe-book-66c27.firebaseapp.com",
  });
  
}

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
