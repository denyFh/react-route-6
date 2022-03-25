// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutApp from './pages/AboutApp';
import AboutAuthor from './pages/AboutAuthor';
import NotFound from './pages/Notfound';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about/about-app" element={<AboutApp />}></Route>
        <Route path="/about/about-author" element={<AboutAuthor />}></Route>
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
