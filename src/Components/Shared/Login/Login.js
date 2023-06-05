import React, { useState } from "react";
import "./Login.css";
import { GoogleAuthProvider } from "@firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "../../Homepage/Homepage";
import { Link, useHistory, useLocation } from "react-router-dom";
import initializeFirebase from "../../Firebase/Firebase.initialize";
import UseAuth from "../../Hooks/UseAuth";

initializeFirebase();

const Login = () => {
  const {
    User,
    setUser,
    setIsLoading,
    EmailAndPasswordSignIn,
    SignInWithGoogle,
  } = UseAuth();
  const history = useHistory();
  const location = useLocation();

  const url = location.state?.from || "/home";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const HandleEmailAndPasswordSignIn = (e) => {
    e.preventDefault();

    EmailAndPasswordSignIn(email, password)
      .then((userCredential) => {
        // Signed in
        // ...
        setIsLoading(true);
        setUser(userCredential.user);
        history.push(url);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
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
  if (User.email) {
    return (
      <div>
        <h1 className="m-5">
          Yoy are Already Logged in <br />
          Logout first to Login Another Account
        </h1>
      </div>
    );
  }

  return (
    <div>
      <main className="d-flex justify-content-center align-items-center bg-90">
        <div className="container d-flex justify-content-center align-items-center">
          <div className=" border border-dark rounded p-5">
            <form
              className="login-form"
              onSubmit={HandleEmailAndPasswordSignIn}
            >
              <h4 className="login-title">Login</h4>
              <input
                className="input"
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
              <input className="submit-button" type="submit" value="Login" />
              <p className="text-center text-dark mt-2">
                <small>
                  Don't have an account?{" "}
                  <Link to="/new" className="create-acc-link disabled">
                    Create a new one
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
                    className="btn login-with-google my-2"
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

      {/* {!User.email && (
                
            )
            }
            
  {User.email && <Redirect to="/home" />} */}
    </div>
  );
};

export default Login;
