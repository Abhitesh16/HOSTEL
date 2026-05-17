import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAM7QTh1fi3M6qsPmUouTjWke35flUzos4",
  authDomain: "hostel1-f83d1.firebaseapp.com",
  projectId: "hostel1-f83d1",
  storageBucket: "hostel1-f83d1.firebasestorage.app",
  messagingSenderId: "294192670198",
  appId: "1:294192670198:web:facb7dfdd148f2b4cc13d7",
  measurementId: "G-0MY1YZW6JH"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
