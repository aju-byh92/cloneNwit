import fbase from "firebase/app";
import "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyAym0PmJ2VTYHbbFnrEi4b7g0MaJ2GBj6U",
//     authDomain: "nwit-56c10.firebaseapp.com",
//     projectId: "nwit-56c10",
//     storageBucket: "nwit-56c10.appspot.com",
//     messagingSenderId: "915296803011",
//     appId: "1:915296803011:web:3f813ef47da240ee056a76"
//   };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
};


  export default fbase.initializeApp(firebaseConfig);