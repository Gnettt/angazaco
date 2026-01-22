import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Cumulocity from './pages/Cumulocity'
import Consultancy from './pages/Consultancy'
import SATFARM from './pages/SATFARM'
import Kodra from './pages/kodra'
import Contact from './pages/Contact'
import Privacypolicy from './pages/pricacypolicy'
import AccountDeletion from './pages/accountdeletion'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cumulocity" element={<Cumulocity />} />
            <Route path="/consultancy" element={<Consultancy />} />
            <Route path="/satfarm" element={<SATFARM />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/kodra" element={<Kodra />} />
            <Route path="/pricacypolicy" element={<Privacypolicy />} />
            <Route path="/accountdeletion" element={<AccountDeletion />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
