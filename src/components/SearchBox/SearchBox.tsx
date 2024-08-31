import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeEmailFilter,
  changeNameFilter,
  changePhoneFilter,
  changeUsernameFilter,
  selectEmail,
  selectName,
  selectPhone,
  selectUsername,
} from "../../redux/filter/slice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const currentName = useSelector(selectName);
  const currentUsername = useSelector(selectUsername);
  const currentEmail = useSelector(selectEmail);
  const currentPhone = useSelector(selectPhone);

  return (
    <div>
      <label>
        <input
          type="text"
          name="name"
          placeholder="Name..."
          value={currentName}
          onChange={(e) => dispatch(changeNameFilter(e.target.value))}
        />
      </label>
      <label>
        <input
          type="text"
          name="username"
          placeholder="Username..."
          value={currentUsername}
          onChange={(e) => dispatch(changeUsernameFilter(e.target.value))}
        />
      </label>
      <label>
        <input
          type="text"
          name="email"
          placeholder="Email..."
          value={currentEmail}
          onChange={(e) => dispatch(changeEmailFilter(e.target.value))}
        />
      </label>
      <label>
        <input
          type="text"
          name="phone"
          placeholder="Phone..."
          value={currentPhone}
          onChange={(e) => dispatch(changePhoneFilter(e.target.value))}
        />
      </label>

      <button
        className={s.btn}
        onClick={() => {
          dispatch(changeEmailFilter(""));
          dispatch(changeNameFilter(""));
          dispatch(changeUsernameFilter(""));
          dispatch(changePhoneFilter(""));
        }}
      >
        Reset all
      </button>
    </div>
  );
};

export default SearchBox;
