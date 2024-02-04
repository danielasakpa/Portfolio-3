import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="app">
      <Router>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
