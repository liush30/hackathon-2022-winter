import Index from "./views/index";
import Create from "./Create";
import List from "./views/list";
import Picture from "./views/picture";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <div>
        <p> */}
      <Route exact component={Index} path="/"></Route>
      {/* </p>
        <p> */}
      <Route exact component={Create} path="/Create"></Route>
      <Route exact component={List} path="/List"></Route>
      <Route exact component={Picture} path="/Picture"></Route>
      {/* </p>
      </div> */}
      {/* <hr /> */}
      {/* <div>
        <Switch>
          <Route exact component={Index} path="/"></Route>

          <Route
            exact
            component={Create}
            path="/substrate-front-end-template/Create"
          ></Route>
        </Switch>
      </div> */}
    </div>
  );
}

export default App;
