import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import FavoriteMovies from "./pages/FavoriteMovies";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<FavoriteMovies />} />
      </Routes>
    </div>
  );
}

export default App;
