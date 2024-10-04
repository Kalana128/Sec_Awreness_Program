import logo from './logo.svg';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Button from './components/Button';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Support from './pages/Support';
import Content from './components/Content';
import Page1 from './pages/Read/Page1';
import PreAssessment from './pages/PreAssesment';
import FinalAssessment from './pages/FinalAssessment';
import Footer from './components/Footer';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Router>
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/support" element={<Support />} />
            <Route path="/content" element={<Content />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/preAssement" element={<PreAssessment />} />
            <Route path="/finalassesment" element={<FinalAssessment />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

