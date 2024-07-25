import "./App.css";
import { Route } from "@solidjs/router";
import { Router } from "@solidjs/router";
import Artists from "./components/artists/Artists.jsx";
import Artist from "./components/artist/Artist.jsx";
import Search from "./components/search/search.jsx";
import Album from "./components/album/album.jsx";

function App() {
  return (
    <>
      {/* <Search/> */}
      <Router>
        <Route path="/" component={Artists} />
        <Route path="/albums/:id" component={Artist} />
        <Route path="/albums/:id/:title" component={Album} />
      </Router>
    </>
  );
}

export default App;
