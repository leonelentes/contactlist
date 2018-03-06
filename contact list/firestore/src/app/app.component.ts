import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// Imports up here..

interface Post {
  FirstName: string;
  LastName:string;
  Phone:string;
  Mobile:string;
  Email:string;
  Address:string;
}

interface PostId extends Post { 
  id: string; 
}
// @Component Decorator here..

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  postsCol: AngularFirestoreCollection<Post>;
  posts:any;

  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;

  FirstName:string;
  LastName:string;
  Phone:string;
  Mobile:string;
  Email:string;
  Address:string;
  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.postsCol = this.afs.collection('posts');
    //this.posts = this.postsCol.valueChanges();
    this.posts = this.postsCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });
  }

  addPost() {
    this.afs.collection('posts').add({'FirstName': this.FirstName, 'LastName': this.LastName, 'Phone': this.Phone, 'Mobile': this.Mobile, 'Email': this.Email, 'Address': this.Address});
  }

  getPost(postId) {
    this.postDoc = this.afs.doc('posts/'+postId);
    this.post = this.postDoc.valueChanges();
  }

  deletePost(postId) {
    this.afs.doc('posts/'+postId).delete();
  }

}

