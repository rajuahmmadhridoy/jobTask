import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link,Redirect } from "react-router-dom";
import Show from "./component/show/Show";
import Shows from "./component/shows/Shows";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
          <Redirect to="/tv-shows/avengers" />
          </Route>
          <Route  path="/tv-shows/avengers">
            <Shows />
          </Route>
          <Route path="/tv-shows/details/:id">
            <Show />
          </Route>
          <Route path="*">
            <shows />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
