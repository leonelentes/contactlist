import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


// Other imports removed for brevity

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Paste in your credentials that you saved earlier
var firebaseConfig = {
  apiKey: "AIzaSyDfU1Ar6GFbHupWF9ZAsIQNRVmdDC4xIGw",
    authDomain: "contactlist-c9f7f.firebaseapp.com",
    databaseURL: "https://contactlist-c9f7f.firebaseio.com",
    projectId: "contactlist-c9f7f",
    storageBucket: "contactlist-c9f7f.appspot.com",
    messagingSenderId: "71678098289"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),  // Add this
    AngularFirestoreModule,
    FormsModule                            // And this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
