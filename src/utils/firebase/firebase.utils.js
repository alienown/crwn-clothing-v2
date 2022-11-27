import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBFbvXCtuZinq4v3Aa7xmQ8JGliF4Ixhww',
  authDomain: 'crwn-clothing-db-ccb7f.firebaseapp.com',
  projectId: 'crwn-clothing-db-ccb7f',
  storageBucket: 'crwn-clothing-db-ccb7f.appspot.com',
  messagingSenderId: '433761620616',
  appId: '1:433761620616:web:4a85e5d22a2f9bc033053d',
};

// Initialize Firebase
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
