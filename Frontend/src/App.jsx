import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Homepage from './pages/homepage'
import SalesPage from './pages/SalesPage'
import KandyPage from './pages/KandyPage'
import HousesPage from './pages/HousesPage'
import ApartmentsPage from './pages/ApartmentsPage'
import LuxuryPage from './pages/LuxuryPage'
import LandPage from './pages/LandPage'
import CommercialPage from './pages/CommercialPage'
import HomeLoanPage from './pages/HomeLoanPage'
import Login from './components/Login'
import Register from './components/Register'
import ForgotPassword from './components/ForgotPassword'
import { PostAd } from './pages/PostAd'

function LoginRoute() {
  const navigate = useNavigate()
  return (
    <Login
      onSwitchToRegister={() => navigate('/register')}
      onSwitchToForgot={() => navigate('/forgot')}
      openProperty={() => navigate('/')}
    />
  )
}

function RegisterRoute() {
  const navigate = useNavigate()
  return <Register onSwitchToLogin={() => navigate('/login')} onRegistered={() => navigate('/')} />
}

function ForgotRoute() {
  const navigate = useNavigate()
  return <ForgotPassword onBackToLogin={() => navigate('/login')} />
}

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/login" element={<LoginRoute />} />
          <Route path="/register" element={<RegisterRoute />} />
          <Route path="/forgot" element={<ForgotRoute />} />

          {/* Keep Navbar/Footer links from breaking */}
          <Route path="/properties" element={<SalesPage />} />
          <Route path="/kandy" element={<KandyPage />} />
          <Route path="/contact" element={<Homepage />} />
          <Route path="/post-ad" element={<PostAd />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/rentals" element={<Homepage />} />
          <Route path="/houses" element={<HousesPage />} />
          <Route path="/apartments" element={<ApartmentsPage />} />
          <Route path="/luxury" element={<LuxuryPage />} />
          <Route path="/land" element={<LandPage />} />
          <Route path="/commercial" element={<CommercialPage />} />
          <Route path="/home-loans" element={<HomeLoanPage />} />
          <Route path="/aboutus" element={<Homepage />} />
          <Route path="/faqs" element={<Homepage />} />
          <Route path="/privacy-policy" element={<Homepage />} />
          <Route path="/terms" element={<Homepage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
