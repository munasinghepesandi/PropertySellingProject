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
import SalesSectionPage from './pages/SalesSectionPage'
import ForeignersGuidePage from './pages/ForeignersGuidePage'
import PropertyPriceIndexPage from './pages/PropertyPriceIndexPage'
import OurServicesPage from './pages/OurServicesPage'
import FindAgentPage from './pages/FindAgentPage'
import HelpPage from './pages/HelpPage'
import Login from './components/Login'
import Register from './components/Register'
import ForgotPassword from './components/ForgotPassword'

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
  return <Register onSwitchToLogin={() => navigate('/login')} />
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
          <Route path="/post-ad" element={<Homepage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/sales/house-price-index" element={<PropertyPriceIndexPage />} />
          <Route path="/sales/land-price-index" element={<PropertyPriceIndexPage />} />
          <Route path="/sales/:sectionSlug" element={<SalesSectionPage />} />
          <Route path="/rentals" element={<Homepage />} />
          <Route path="/houses" element={<HousesPage />} />
          <Route path="/apartments" element={<ApartmentsPage />} />
          <Route path="/luxury" element={<LuxuryPage />} />
          <Route path="/land" element={<LandPage />} />
          <Route path="/commercial" element={<CommercialPage />} />
          <Route path="/home-loans" element={<HomeLoanPage />} />
          <Route path="/sales/foreigners-guide" element={<ForeignersGuidePage />} />
          <Route path="/features/property-buying-for-foreigners.php" element={<ForeignersGuidePage />} />
          <Route path="/features/land-price-index.php" element={<PropertyPriceIndexPage />} />
          <Route path="/our-services" element={<OurServicesPage />} />
          <Route path="/find-agent" element={<FindAgentPage />} />
          <Route path="/invest" element={<Homepage />} />
          <Route path="/market-insights" element={<Homepage />} />
          <Route path="/wanted" element={<Homepage />} />
          <Route path="/find-agent" element={<Homepage />} />
          <Route path="/more" element={<Homepage />} />
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
