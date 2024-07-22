import solidLogo from "./assets/solid.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route } from "@solidjs/router";
import { Router } from "@solidjs/router";

function App() {
  return (
    <>
      <input></input>
      <Router>
        <Route path="/artists" component={test("asdasd")} />
        <Route path="/artist" component={test("wrrqwe")} />
      </Router>
    </>
  );
}

function test(t) {
  return () => <h1>{t}</h1>;
}
export default App;
