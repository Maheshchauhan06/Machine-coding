import { useEffect, useState } from "react";
import PaginationScreen from "./Components/Pagination/PaginationScreen";
import Passwordgenrator from "./Components/PasswordGenrator/PasswordGenrator";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Passwordgenrator />
    </div>
  );
}
