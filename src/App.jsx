import Home from "./pages/Home";
import SinglePlayer from "./pages/SinglePlayer";
import NotFound from "./pages/NotFound";
import CreatePlayer from "./pages/CreatePlayer";
import Header from "./components/Header/Header";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<SinglePlayer />} />
        <Route path="/create" element={<CreatePlayer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;