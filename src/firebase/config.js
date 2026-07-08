import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyDq0XdZ2Bjm6mqE10DmGlQFrg14WQfoTUM",
  authDomain: "luxe-boutique-db.firebaseapp.com",
  projectId: "luxe-boutique-db",
  storageBucket: "luxe-boutique-db.firebasestorage.app",
  messagingSenderId: "143620101473",
  appId: "1:143620101473:web:d3ac665eb04c93692c2120",
  measurementId: "G-LSZ6TSXD6R"
}

export const app = initializeApp(firebaseConfig)
