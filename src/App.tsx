import { useState } from "react";
import "./App.css";
import UserTable from "./UserTable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserTable />
    </>
  );
}

export default App;
