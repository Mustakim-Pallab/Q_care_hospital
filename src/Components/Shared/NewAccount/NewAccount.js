import React, { useState } from "react";
import "./NewAccount.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "@firebase/auth";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import initializeFirebase from "../../Firebase/Firebase.initialize";
import UseAuth from "../../Hooks/UseAuth";

const NewAccount = () => {
  const {
    setUser,
    setIsLoading,
    SignInWithGoogle,
    CreateAccountWithEmailAndPassword,
  } = UseAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const location = useLocation();

  const url = location.state?.from || "/home";

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const EmailAndPasswordSignUp = (e) => {
    e.preventDefault();

    CreateAccountWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        setIsLoading(true);
        const user = userCredential.user;
        // ...
        setUser(user);
        history.push(url);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    SignInWithGoogle()
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        setIsLoading(true);
        setUser(result.user);
        history.push(url);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <main className="d-flex justify-content-center align-items-center bg-90">
        <div className="container d-flex justify-content-center align-items-center">
          <div className=" border border-dark rounded p-5">
            <form className="NewAccount-form" onSubmit={EmailAndPasswordSignUp}>
              <h4 className="NewAccount-title">Create New Account</h4>
              <input
                className="input"
                id="email"
                name="email"
                placeholder="Email"
                onBlur={getEmail}
                required
              />
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Passowrd"
                onBlur={getPassword}
                required
              />
              <input className="submit-button" type="submit" value="Sign Up" />
              <p className="text-center text-dark mt-2">
                <small>
                  Already have an account?{" "}
                  <Link to="/login" className="create-acc-link disabled">
                    Login
                  </Link>
                </small>
              </p>
            </form>

            <div className="d-flex pb-3">
              <hr className="container-fluid me-3" />
              or
              <hr className="container-fluid ms-3" />
            </div>
            <div className="d-flex justify-content-center">
              <div>
                <div className="d-flex justify-content-center">
                  <button
                    onClick={handleGoogleSignIn}
                    className="btn NewAccount-with-google my-2"
                  >
                    <FontAwesomeIcon icon={faGoogle} className="me-3" />
                    Continue with google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewAccount;
