import Habits from "./pages/Habits/Habits";
import LoginPage from "./pages/LoginPage"
import SignUp from "./pages/SignUp";
import History from "./pages/History";
import Today from "./pages/Today/Today";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppProvider from "./AppContext/Provider";
import { useState } from "react";

export default function App() {
  const [createdHabits, setCreatedHabits] = useState([])

  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/habitos" element={<Habits createdHabits={createdHabits} setCreatedHabits={setCreatedHabits}/>} />
          <Route path="/hoje" element={<Today createdHabits={createdHabits}/>} />
          <Route path="/historico" element={<History />} />
        </Routes>
      </BrowserRouter>

    </AppProvider>
  );
}