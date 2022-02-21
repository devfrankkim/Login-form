import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Register from "./Register";

import styled from "styled-components";

const LOGIN_URL = "http://localhost:3500/user";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data: userData } = await axios.get(LOGIN_URL);

      userData.map((person) =>
        person.user.toLowerCase() === user.toLowerCase() && person.pwd === pwd
          ? (setSuccess(true), setUser(""), setPwd(""))
          : setErrMsg("incorrect username or password.")
      );
    } catch (err) {
      if (err.response) {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : (
        <section>
          {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
            {errMsg}
          </p> */}
          {/* <p ref={errRef}>{errMsg}</p> */}

          {errMsg ? (
            <ErrMsg ref={errRef}>{errMsg}</ErrMsg>
          ) : (
            <OffScreen ref={errRef}></OffScreen>
          )}
          {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
            {errMsg}
          </p> */}
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button>Sign In</button>
          </form>
          <p>
            Need an Account?
            <br />
            <span className="line">
              <Link to="/register" element={<Register />}>
                Register
              </Link>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

// styled plus <tag>
const ErrMsg = styled.p`
  text-align: center;
  background-color: lightpink;
  color: firebrick;
  font-weight: bold;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;

const OffScreen = styled.p`
  position: absolute;
  left: -9999px;
`;
/*
.errmsg {
  text-align: center;
  background-color: lightpink;
  color: firebrick;
  font-weight: bold;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
}


.offscreen {
  position: absolute;
  left: -9999px;
*/
export default Login;
