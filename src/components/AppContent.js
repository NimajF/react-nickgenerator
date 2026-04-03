import { useContext } from "react";
import { nickContext } from "../contexts/nickContext";
import { Navbar } from "./Navbar";
import { NickContainer } from "./NickContainer";

export default function AppContent() {
  const { theme } = useContext(nickContext);
  return (
    <div className={`app-content ${theme}`}>
      <Navbar />
      <NickContainer />
    </div>
  );
}
