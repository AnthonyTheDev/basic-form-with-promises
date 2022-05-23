import { useState } from "react";

import { createUser } from "./createUser";
import { monthsOfYear, buildDaysOfMonth } from "./createDateOptions";

import { useNavigate, Link } from "react-router-dom";

function SignUpForm({ authUser }) {
  const [firstName, setFirstName] = useState("anthony");
  const [lastName, setLastName] = useState("clinton");
  const [email, setEmail] = useState("mr.clinton@aol.com");
  const [password, setPassword] = useState("123456");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [message, setmessage] = useState(null);
  const [submitted, setSubmitted] = useState({
    status: false,
    backgroundColor: "pink",
    textColor: "black",
  });
  const navigate = useNavigate();

  const doCreateUser = async (data) => {
    try {
      const user = await createUser(data);
      setmessage(`User ${user.firstName} ${user.lastName} added`);
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
    } catch (error) {
      setmessage(`User exist already`);
      setTimeout(() => {
        setmessage(null);
      }, 5000);
    }
  };

  return (
    <section className="background">
      <div className="innerform">
        <h1 className="signin-header">Sign Up Here!</h1>
        <form
          className="form-container"
          onSubmit={(e) => {
            e.preventDefault();
            doCreateUser({
              firstName,
              lastName,
              email,
              password,
              month,
              day,
              year,
            });
          }}
        >
          <div className="inputcontainer">
            <div className="inputcontainer-labels two-fields">
              <label className="label" htmlFor="first-name">
                First Name
              </label>
              <input
                id="first-name"
                placeholder="First Name"
                required
                className="input"
                type="text"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="inputcontainer-labels two-fields">
              <label className="label" htmlFor="last-name">
                Last Name
              </label>
              <input
                id="last-name"
                placeholder="Last Name"
                required
                className="input"
                type="text"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
          </div>
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

          <div className="inputcontainer">
            <div className="inputcontainer-labels">
              <label className="label" htmlFor="">
                Date of Birth
              </label>
              <div className="inputcontainer">
                <div className="three-fields">
                  <select
                    onChange={(e) => {
                      setMonth(e.target.value);
                    }}
                    className="input"
                    name="Month"
                    id="month"
                    required
                  >
                    <option value="">Month</option>
                    {monthsOfYear.map((currentMonth) => (
                      <option value={currentMonth} key={currentMonth}>
                        {currentMonth}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="three-fields">
                  <select
                    required
                    onChange={(e) => {
                      setDay(e.target.value);
                    }}
                    className="input"
                    name="Day"
                    id="day"
                  >
                    <option value="">Day</option>
                    {[...new Array(buildDaysOfMonth(month))].map(
                      (currentDay, index) => (
                        <option value={index + 1} key={index + 1}>
                          {index + 1}
                        </option>
                      )
                    )}
                  </select>
                </div>
                <div className="three-fields">
                  <input
                    required
                    onChange={(e) => {
                      setYear(e.target.value);
                    }}
                    maxLength="4"
                    className="input"
                    name="Year"
                    id="year"
                    placeholder="Year"
                  />
                </div>
              </div>
            </div>
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
        <Link to={"/"}>
          <p className="signup link">Already have an account? Sign in here</p>
        </Link>
      </div>
    </section>
  );
}

export default SignUpForm;
