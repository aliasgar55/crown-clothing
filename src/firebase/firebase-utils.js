import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCH1hqNkDWhoCauKbDkZuWwzhnSDtpbYSg",
    authDomain: "crown-clothing-a8ad6.firebaseapp.com",
    databaseURL: "https://crown-clothing-a8ad6.firebaseio.com",
    projectId: "crown-clothing-a8ad6",
    storageBucket: "crown-clothing-a8ad6.appspot.com",
    messagingSenderId: "75701935469",
    appId: "1:75701935469:web:39c0e711c26e34754dce64",
    measurementId: "G-7JM15NX05J"
  };


export const creatUserProfileDocument = async (userAuth, additionlData) => {

	if(!userAuth) return

	const userRef = firestore.doc(`users/${userAuth.uid}`); 

	const snapShot = await userRef.get();

	if(!snapShot.exits) {
		const {displayName, email } = userAuth;
		const createdAt = new Date();
		try{
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionlData
			})

		}
		catch(error) {
			console.log("error while creating User" , error.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export  const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;