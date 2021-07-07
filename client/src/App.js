import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import { useStateValue } from "./Context/StateProvider";
import Companies from "./Pages/Companies/Companies";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Placements from "./Pages/Placements/Placements";
import Students from "./Pages/Students/Students";
/* eslint-disable */
function App() {
  const [{ user }, dispatchUser] = useStateValue();
  const [{ admin }, dispatchAdmin] = useStateValue();

  return (
    <>
      {!admin && !user ? (
        <Login />
      ) : (
        <Router>
          <Nav />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/companies">
              <Companies />
            </Route>
            <Route exact path="/placements">
              <Placements />
            </Route>
            <Route exact path="/students">
              <Students />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
