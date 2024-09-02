import React from "react";

import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <h2 className={s.title}>User information</h2>
    </header>
  );
};

export default Header;
