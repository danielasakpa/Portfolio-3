import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';

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

    </div>
  );
}

export default App;
