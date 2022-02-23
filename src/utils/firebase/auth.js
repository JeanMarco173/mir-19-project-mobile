import { auth } from "../../../firebase.js";

const handleSignUp = async (email, password) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      console.log("user", user);
    })
    .catch((error) => {
      console.log("error", error);
    });
};

const handleSignIn = (email, password) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      console.log("user", user);
    })
    .catch((error) => {
      console.log("error", error);
    });
};

export { handleSignUp, handleSignIn };
