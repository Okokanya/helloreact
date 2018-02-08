import { auth } from './firebase';

// Sign In
const signInWithEmailAndPassword = (email, password) => auth.signInWithEmailAndPassword(email, password);

// Sign Up
const createUserWithEmailAndPassword = (email, password) => auth.createUserWithEmailAndPassword(email, password);

// Sign out
const signOut = () => auth.signOut();

export { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword };
