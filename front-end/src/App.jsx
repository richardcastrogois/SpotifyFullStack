import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './componentes/Header/Header';
import Sidebar from './componentes/Sidebar/Sidebar';
import Explore from './pages/Explore/Explore';
import Footer from './componentes/Footer/Footer';
import Playlist from '../src/pages/Playlist/Playlist';
import Artists from './pages/Artists/Artists';
import Artist from "./pages/Artist/Artist";
import Songs from "./pages//Songs/Songs";
import Song from "./pages/Song/Song";

function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <div className="content">
          <Header />
          <Routes>
            <Route path="/" element={<Explore />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/artist/:id" element={<Artist />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/song/:id" element={<Song />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App
