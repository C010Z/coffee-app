 
import { initializeApp } from "firebase/app";
 
const firebaseConfig = {
  apiKey: "AIzaSyAQM466Dnjdj5ZuT36Nso_Qr1JU689fAUs",
  authDomain: "coffee-app-4326b.firebaseapp.com",
  projectId: "coffee-app-4326b",
  storageBucket: "coffee-app-4326b.appspot.com",
  messagingSenderId: "254196802887",
  appId: "1:254196802887:web:eaf0334b1380b9c9985862"
};

 
const app = initializeApp(firebaseConfig);

 export const getFirestoreApp = () => {

    return app
}