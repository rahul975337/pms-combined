import "./App.css";
import Login from "./Pages/Login/Login";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Companies from "./Pages/Companies/Companies";
import Placements from "./Pages/Placements/Placements";
import { useStateValue } from "./Context/StateProvider";
import Students from "./Pages/Students/Students";

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
