// components
import { useState } from "react";
import AuthPage from "./pages/AuthPage";
import NewOrderPage from "./pages/NewOrderPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";

// css
import "./App.css";

export default function App() {
  const [user, setUser] = useState(null);

  return <main className="App">{user ? <NewOrderPage /> : <AuthPage />}</main>;
}
