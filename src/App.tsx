import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Footer from './components/Footer/Footer'
import TimelinePage from './pages/TimeLinePage'
import Gallery from './pages/GalleryPage'
import ContactForm from './pages/ContactPage'
import InfoPage from './pages/InfoPage'
import "./App.css"

function App() {

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <div className="container mt-4 mb-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/timeline" element={<TimelinePage />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/info" element={<InfoPage />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App