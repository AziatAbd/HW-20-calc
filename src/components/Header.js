import { useDispatch, useSelector } from "react-redux";
import { authActionTypes } from "../store/auth/AuthReducer";
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();

  const isAuthorized = useSelector((state) => state.auth.isAuthorized);

  const onLogout = () => {
    dispatch({ type: authActionTypes.LOGOUT });
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthorized && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={onLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
