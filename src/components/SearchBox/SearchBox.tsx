import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectFilter } from "../../redux/filter/slice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectFilter);

  return (
    <div className={s.wrapper}>
      <p className={s.title}> Search by name, username, email, or phone:</p>

      <div className={s.input_container}>
        <input
          className={s.input_field}
          type="text"
          id="filter"
          placeholder=" "
          value={currentFilter}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />

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
