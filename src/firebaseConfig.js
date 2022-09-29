import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAcKUX3QhYySMCcsTW90MuBgrNbiCv1p1I",
  authDomain: "gabriel-app-2df96.firebaseapp.com",
  projectId: "gabriel-app-2df96",
  storageBucket: "gabriel-app-2df96.appspot.com",
  messagingSenderId: "819959822686",
  appId: "1:819959822686:web:99b769024fedc94b44f7cf"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);