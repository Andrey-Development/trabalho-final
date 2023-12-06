import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC3tpMr44NkbWcffIqSJtF_hNc5C4lgdVw",
  authDomain: "trabalho-final-questions.firebaseapp.com",
  databaseURL: "https://trabalho-final-questions-default-rtdb.firebaseio.com",
  projectId: "trabalho-final-questions",
  storageBucket: "trabalho-final-questions.appspot.com",
  messagingSenderId: "57976312986",
  appId: "1:57976312986:web:adf74fab03e788446cbb23",
  measurementId: "G-ZFCTHWHE37"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { db, app };