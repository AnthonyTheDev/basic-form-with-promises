import { useState } from "react";

import createUser from "./createUser";
import { monthsOfYear, buildDaysOfMonth } from "./createDateOptions";

function Form() {
  const [firstName, setFirstName] = useState("anthony");
  const [lastName, setLastName] = useState("clinton");
  const [email, setEmail] = useState("mr.clinton@aol.com");
  const [password, setPassword] = useState("123456");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");

  const doCreateUser = async (data) => {
    try {
      const result = await createUser(data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const inputStyle = {
    height: "50px",
    borderRadius: "10px",
    width: "100%",
    border: "1px solid #000",
    marginBottom: "20px",
    textAlign: "left",
    paddingLeft: "10px",
  };

  const inputContainerStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  };

  const labelStyle = {
    fontFamily: "arial",
    marginBottom: "5px",
    marginLeft: "10px",
    fontWeight: 600,
  };

  return (
    <section
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "pink",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "30%",
          minHeight: "60%",
          padding: "10px 20px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontFamily: "arial",
            fontWeight: "800",
            fontStyle: "bold",
            fontSize: "34px",
          }}
        >
          Sign Up Here!
        </h1>
        <form
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
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            height: "50%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ ...inputContainerStyle, width: "45%" }}>
              <label style={labelStyle} htmlFor="first-name">
                First Name
              </label>
              <input
                id="first-name"
                placeholder="First Name"
                required
                style={inputStyle}
                type="text"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div style={{ ...inputContainerStyle, width: "45%" }}>
              <label style={labelStyle} htmlFor="last-name">
                Last Name
              </label>
              <input
                id="last-name"
                placeholder="Last Name"
                required
                style={inputStyle}
                type="text"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
          </div>
          <div style={inputContainerStyle}>
            <label style={labelStyle} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              placeholder="Email"
              required
              style={inputStyle}
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div style={inputContainerStyle}>
            <label style={labelStyle} htmlFor="password">
              Password
            </label>

            <input
              id="password"
              placeholder="Password"
              required
              style={inputStyle}
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",

              // width: "45%",
            }}
          >
            <div style={inputContainerStyle}>
              <label style={labelStyle} htmlFor="">
                Date of Birth
              </label>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ width: "30%" }}>
                  <select
                    onChange={(e) => {
                      setMonth(e.target.value);
                    }}
                    style={inputStyle}
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
                <div style={{ width: "30%" }}>
                  <select
                    required
                    onChange={(e) => {
                      setDay(e.target.value);
                    }}
                    style={inputStyle}
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
                <div style={{ width: "30%" }}>
                  <input
                    required
                    onChange={(e) => {
                      setYear(e.target.value);
                    }}
                    maxLength="4"
                    style={inputStyle}
                    name="Year"
                    id="year"
                    placeholder="Year"
                  />
                </div>
              </div>
            </div>
          </div>
          <input
            required
            style={{
              ...inputStyle,
              width: "100px",
              textAlign: "center",
              paddingLeft: "0px",
            }}
            type="submit"
          />
        </form>
      </div>
    </section>
  );
}

export default Form;
