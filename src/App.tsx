import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DosDeMilanesa from './pages/DosDeMilanesa';
import Demo from './pages/Demo';
import Home from './pages/Home';

// Optional: Code-split your routes for better performance

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dosdemilanesa" element={<DosDeMilanesa />} />
        <Route path="/dosdemilanesa/demo" element={<Demo />} />
      </Routes>
    </Router>
  );
}

export default App;
