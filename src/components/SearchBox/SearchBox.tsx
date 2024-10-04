import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectFilter } from "../../redux/filter/slice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectFilter);

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}> Filter:</h3>

      <div className={s.input_container}>
        <input
          className={s.input_field}
          type="text"
          id="filter"
          placeholder=" "
          value={currentFilter}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
        <label className={s.placeholder} htmlFor="filter">
          Name, username, email, or phone:
        </label>

        <button
          className={s.btn}
          onClick={() => {
            dispatch(changeFilter(""));
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
