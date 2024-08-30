import { useEffect } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";
import UsersTable from "./components/UsersTable/UsersTable";
import { useDispatch } from "react-redux";
import { fetchAllUsersThunk } from "./redux/users/operations";
import { AppDispatch } from "./redux/store";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllUsersThunk());
  }, [dispatch]);

  return (
    <div className="App">
      <SearchBox />
      <UsersTable />
    </div>
  );
}

export default App;
