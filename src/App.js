import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages and components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Put navbar above all pages but inside the BrowseRouter */}
        <Navbar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
