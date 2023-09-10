import { Card } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header nombre="Adopta un perrito" />
      <Card nombre="Bartolo"></Card>
    </>
  );
}

export default App;
