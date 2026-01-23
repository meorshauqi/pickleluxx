import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import LandingPage from './components/home/LandingPage';
import './App.css';

// Placeholder components for routes
const Home = () => <LandingPage />;
const About = () => <div className="min-h-screen bg-gray-900 text-white p-8"><h1 className="text-4xl">About us</h1></div>;
const Services = () => <div className="min-h-screen bg-gray-900 text-white p-8"><h1 className="text-4xl">Services</h1></div>;
const Price = () => <div className="min-h-screen bg-gray-900 text-white p-8"><h1 className="text-4xl">Price</h1></div>;
const Location = () => <div className="min-h-screen bg-gray-900 text-white p-8"><h1 className="text-4xl">Location</h1></div>;

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black" style={{ margin: 0, padding: 0 }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/price" element={<Price />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
