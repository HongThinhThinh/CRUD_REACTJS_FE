import Routerr from "./component/Router/Routerr";
import Wrap from "./component/Wrap/Wrap";
import Header from "./component/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <Wrap>
        <Header />
        <Routerr></Routerr>
      </Wrap>
    </Router>
  );
}

export default App;
