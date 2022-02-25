import { auth } from "../../../firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const handleSignUp = async (email, password) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { user: userCredentials.user };
  } catch (error) {
    return { error };
  }
};

const handleSignIn = async (email, password) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { user: userCredentials.user };
  } catch (error) {
    return { error };
  }
};

export { handleSignUp, handleSignIn };
