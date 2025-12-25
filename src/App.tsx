import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Cumulocity from './pages/Cumulocity'
import Consultancy from './pages/Consultancy'
import SATFARM from './pages/SATFARM'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cumulocity" element={<Cumulocity />} />
            <Route path="/consultancy" element={<Consultancy />} />
            <Route path="/satfarm" element={<SATFARM />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
