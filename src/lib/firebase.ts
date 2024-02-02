import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBiZ30OqxiFdlq6Dr_aRzE5NaacQ6NOFXE",
    authDomain: "hotel-dashboard-a33b6.firebaseapp.com",
    projectId: "hotel-dashboard-a33b6",
    storageBucket: "hotel-dashboard-a33b6.appspot.com",
    messagingSenderId: "456259130163",
    appId: "1:456259130163:web:eac3f6e804adc1e726e446",
    measurementId: "G-HSQH862NY5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
