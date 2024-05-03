import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import css from "../UserMenu/UserMenu.module.css";
import { useAuth } from "../../hooks/useAuth";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
