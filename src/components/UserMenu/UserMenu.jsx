import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import css from "../UserMenu/UserMenu.module.css";
import { useAuth } from "../../hooks/useAuth";
import MaterialButton from "../MaterialButton/MaterialButton";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome {user.name}</p>
      <MaterialButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </MaterialButton>
    </div>
  );
};
