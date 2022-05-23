import { Link } from "react-router-dom";

const UsersPage = ({ user }) => {
  return (
    <section className="user-section">
      <nav className="user-nav nav">
        <h1 className="logo">Logo</h1>
        {user ? (
          <div className="user-logout">
            <p className="user">Welcome, {user.firstName}</p>
            <Link to={"/"}>
              <p className="user link logout">Log out</p>
            </Link>
          </div>
        ) : (
          <Link to="/">
            <p>please sign in</p>
          </Link>
        )}
      </nav>
    </section>
  );
};
export default UsersPage;
