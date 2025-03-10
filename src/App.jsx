import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage.jsx";
import Test from "./Test.jsx";
import Pusher from "./Pusher.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/test" element={<Test />} />

      <Route path="/pusher" element={<Pusher />} />
    </Routes>
  );
}

export default App;
