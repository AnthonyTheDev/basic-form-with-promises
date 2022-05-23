import SignUpForm from "./SignUpForm";
import Login from "./Login";
import UsersPage from "./UsersPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login authUser={setUser} />} />
        <Route path="/signup" element={<SignUpForm authUser={setUser} />} />
        <Route path="/:profile" element={<UsersPage user={user} />} />
      </Routes>
    </Router>
  );
};

export default App;
