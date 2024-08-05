
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';

const App = () => {
  return (
    <Router>
      <div>
      <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-lg font-bold">
              <Link to="/">MyApp</Link>
            </div>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-white hover:text-gray-400">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-gray-400">About</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className='content max-w-4xl mx-auto py-5'>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
        </div>

      </div>
    </Router>
  );
};

export default App;
