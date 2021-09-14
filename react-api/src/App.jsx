import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import Saludo from "./Saludo";
function App() {
  return (
    <>
     <Saludo saludo={"holass"} />
    </>
  );
}

export default App;
