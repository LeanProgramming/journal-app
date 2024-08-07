import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	updateProfile,
} from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: 'select_account',
});

export const signInWithGoogle = async () => {
	try {
		const result = await signInWithPopup(FirebaseAuth, googleProvider);
		// const credentials = GoogleAuthProvider.credentialFromResult( result );

		const { displayName, email, photoURL, uid } = result.user;

		return {
			ok: true,
			displayName,
			email,
			photoURL,
			uid,
		};
	} catch (error: any) {
		// const errorCode = error.code;
		const errorMessage = error.message;

		return {
			ok: false,
			errorMessage,
		};
	}
};

export const registerUserWithEmailPassword = async ({
	email,
	password,
	displayName,
}: {
	email: string;
	password: string;
	displayName: string;
}) => {
	try {
		const resp = await createUserWithEmailAndPassword(
			FirebaseAuth,
			email,
			password
		);
		const { uid, photoURL } = resp.user;

		await updateProfile(FirebaseAuth.currentUser!, { displayName });

		return {
			ok: true,
			uid,
			photoURL,
			email,
			displayName,
		};
	} catch (error: any) {
		const errorMessage = error.message;

		return {
			ok: false,
			errorMessage,
		};
	}
};

export const loginWithEmailPassword = async ({
	email,
	password,
}: {
	email: string;
	password: string;
}) => {
	try {
		const resp = await signInWithEmailAndPassword(
			FirebaseAuth,
			email,
			password
		);
		const { displayName, uid, photoURL } = resp.user;

		return {
			ok: true,
			displayName,
			email,
			uid,
			photoURL,
		};
	} catch (error: any) {
		const errorMessage = error.message;

		return {
			ok: false,
			errorMessage,
		};
	}
};

export const logoutFirebase = async () => {
	return await FirebaseAuth.signOut();
};
