import {initializeApp} from 'firebase';

const app = initializeApp({
  apiKey: "AIzaSyDIzjTdGUXagG3TmkWieZ_GafAvh0dDpnI",
  authDomain: "my-freedom-lesson-9.firebaseapp.com",
  databaseURL: "https://my-freedom-lesson-9.firebaseio.com",
  projectId: "my-freedom-lesson-9",
  storageBucket: "my-freedom-lesson-9.appspot.com",
  messagingSenderId: "632237332145",
  appId: "1:632237332145:web:0e21802fa1e33f96a73490",
  measurementId: "G-GQHJ9PWSMX"
});

export const firestore = app.firestore();
export const auth = app.auth();

export function docToObject(doc) {
    return {
        id: doc.id,
        ...doc.data()
    }
}

export function collectionToObject(collection) {
    return collection.docs.map(docToObject);
}

window.firestore = firestore;
