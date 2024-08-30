import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchStr, selectFilter } from "../../redux/filter/slice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchStr = useSelector(selectFilter);

  return (
    <div>
      <label>
        <input
          type="text"
          name="name"
          placeholder="Name..."
          onChange={(e) => dispatch(changeSearchStr(e.target.value))}
        />
      </label>
      <label>
        <input type="text" name="username" placeholder="Username..." />
      </label>
      <label>
        <input type="text" name="email" placeholder="Email..." />
      </label>
      <label>
        <input type="text" name="phone" placeholder="Phone..." />
      </label>
      {searchStr && (
        <button className={s.btn} onClick={() => dispatch(changeSearchStr(""))}>
          Reset
        </button>
      )}
    </div>
  );
};

export default SearchBox;
