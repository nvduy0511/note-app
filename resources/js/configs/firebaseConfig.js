import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';

const base_url = import.meta.env.VITE_BASE_URL_VUE;
export const firebaseConfig = {
    apiKey: 'AIzaSyCQDtWIKzMrOT0RCpY57CUBs9BdOcDOY68',
    authDomain: 'note-app-4d5a6.firebaseapp.com',
    projectId: 'note-app-4d5a6',
    storageBucket: 'note-app-4d5a6.appspot.com',
    messagingSenderId: '499001071440',
    appId: '1:499001071440:web:453a8fb8fdc1b4b032fe55',
    measurementId: 'G-K8QCHR5JVP',
};

export const uiConfig = {
    signInFlow: 'popup',
    signinSuccessUrl: base_url,
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
        signInSuccessWithAuthResult: function (authResult) {
            console.log(authResult);
            // so it doesn't refresh the page
            return true;
        },
        uiShown: function () {
            console.log('firebase UI mounted');
        },
    },
};

firebase.initializeApp(firebaseConfig);

console.log('runing in firebase config...');
