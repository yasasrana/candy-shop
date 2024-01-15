import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkIRk44hRhxGUre3U-Eg92mkVeE1E7hus",
  authDomain: "candy-shop-d7333.firebaseapp.com",
  projectId: "candy-shop-d7333",
  storageBucket: "candy-shop-d7333.appspot.com",
  messagingSenderId: "1077807415872",
  appId: "1:1077807415872:web:9a6ce36c6753e49cf755a5",
  measurementId: "G-BD416JKSZN"
};

initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app');