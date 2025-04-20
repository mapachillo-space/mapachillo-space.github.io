import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DosDeMilanesa from './pages/DosDeMilanesa';
import Home from './pages/Home';

// Optional: Code-split your routes for better performance

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dosdemilanesa" element={<DosDeMilanesa />} />
      </Routes>
    </Router>
  );
}

export default App;
