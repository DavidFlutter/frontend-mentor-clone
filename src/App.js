import './App.css';
import image from "./images/image1.webp";
import InfoTag from './components/InfoTag';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Line from './components/Line';
import Challenges from './components/Challenges';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <InfoTag></InfoTag>
        <Navbar></Navbar>
        <Hero></Hero>
        <Line></Line>
        <Challenges></Challenges>
        <NewsLetter></NewsLetter>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
