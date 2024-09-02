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
    <div className={s.wrapper}>
      <p className={s.title}>Filter by:</p>

      <div className={s.input_container}>
        <input
          className={s.input_field}
          type="text"
          id="name"
          placeholder=" "
          value={currentName}
          onChange={(e) => dispatch(changeNameFilter(e.target.value))}
        />
        <label className={s.placeholder} htmlFor="name">
          Name
        </label>
      </div>

      <div className={s.input_container}>
        <input
          className={s.input_field}
          type="text"
          placeholder=" "
          id="username"
          value={currentUsername}
          onChange={(e) => dispatch(changeUsernameFilter(e.target.value))}
        />
        <label htmlFor="username" className={s.placeholder}>
          Username
        </label>
      </div>

      <div className={s.input_container}>
        <input
          className={s.input_field}
          type="text"
          placeholder=" "
          id="email"
          value={currentEmail}
          onChange={(e) => dispatch(changeEmailFilter(e.target.value))}
        />
        <label htmlFor="email" className={s.placeholder}>
          Email
        </label>
      </div>

      <div className={s.input_container}>
        <input
          className={s.input_field}
          type="text"
          id="phone"
          placeholder=" "
          value={currentPhone}
          onChange={(e) => dispatch(changePhoneFilter(e.target.value))}
        />
        <label className={s.placeholder}>Phone</label>
      </div>

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

      {/* <div className="input-container">
        <input type="text" id="input" className="input-field" placeholder=" " />
        <label htmlFor="input" className="placeholder">
          Your Placeholder
        </label>
      </div> */}
    </div>
  );
};

export default SearchBox;
