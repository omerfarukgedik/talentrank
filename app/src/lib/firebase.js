import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCKHepaGAZUJ_hGtGWQTMO85D5-YaDh0Sc',
  authDomain: 'talentrank-8b9da.firebaseapp.com',
  projectId: 'talentrank-8b9da',
  storageBucket: 'talentrank-8b9da.firebasestorage.app',
  messagingSenderId: '213141035567',
  appId: '1:213141035567:web:c8f572c25ca8ba1de4c4da',
  measurementId: 'G-RKC874ESL0',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
