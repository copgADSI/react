import "./App.css";
import { Contador } from "./Components/Contador";
import { ScrollHook } from "./Components/ScrollHook";
function App() {
  return (
    <>
      <Contador titulo="contador de clicks" />
      <ScrollHook />
    </>
  );
}

export default App;
