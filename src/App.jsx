import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import LandingPage from './components/home/LandingPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black" style={{ margin: 0, padding: 0 }}>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* All navigation now uses hash links to sections on the landing page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
