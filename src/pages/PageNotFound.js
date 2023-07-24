import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="error">
      <main className="error__message-wrapper">
        <h1 className="error__message-title">404</h1>
        <p className="error__message-info">
          Ooops... Looks like your game didn't make it to the Iron Throne yet.
        </p>
        <p className="error__message-info">
          Click{" "}
          <NavLink className="error__link" to="/">
            here
          </NavLink>{" "}
          to go back your homeland..
        </p>
      </main>
    </section>
  );
};

export default PageNotFound;
