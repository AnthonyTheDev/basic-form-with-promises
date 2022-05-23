import { useState } from "react";
import { findUserByEmail } from "./createUser";
import { Link, useNavigate } from "react-router-dom";

function Login({ authUser }) {
  const [email, setEmail] = useState("mr.clinton@aol.com");
  const [password, setPassword] = useState("123456");
  const [message, setmessage] = useState(null);
  const [submitted, setSubmitted] = useState({
    status: false,
    backgroundColor: "pink",
    textColor: "black",
  });

  const navigate = useNavigate();

  const doFindUserByEmail = async (data) => {
    try {
      const user = await findUserByEmail(data);
      setSubmitted({
        status: true,
        backgroundColor: "green",
        textColor: "white",
      });
      setTimeout(() => {
        setmessage(null);
      }, 5000);
      authUser(user);
      navigate(user.userURL);
      console.log(user);
    } catch ({ message }) {
      setmessage(message);
      setTimeout(() => {
        setmessage(null);
      }, 5000);
    }
  };

  return (
    <section className="background">
      <div className="innerform">
        <h1 className="signin-header">Login in</h1>
        <form
          className="form-container"
          onSubmit={(e) => {
            e.preventDefault();
            doFindUserByEmail({
              email,
              password,
            });
          }}
        >
          <div className="inputcontainer-labels">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              placeholder="Email"
              required
              className="input"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="inputcontainer-labels">
            <label className="label" htmlFor="password">
              Password
            </label>

            <input
              id="password"
              placeholder="Password"
              required
              className="input"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <input
            disabled={submitted.status}
            style={{
              backgroundColor: submitted.backgroundColor,
              color: submitted.textColor,
              cursor: submitted.status === true ? "default" : "pointer",
            }}
            required
            className="input submit-btn"
            type="submit"
          />
          {message && (
            <p style={{ color: submitted.backgroundColor }}>{message}</p>
          )}
        </form>
        <Link to={"/signup"}>
          <p className="signup link">Not a user? Sign Up here!</p>
        </Link>
      </div>
    </section>
  );
}

export default Login;
