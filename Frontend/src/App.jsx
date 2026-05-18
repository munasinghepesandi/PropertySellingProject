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
import HomeLoanRatesPage from './pages/HomeLoanRatesPage'
import HomeLoanCalculatorPage from './pages/HomeLoanCalculatorPage'
import HomeLoanComparisonPage from './pages/HomeLoanComparisonPage'
import SalesSectionPage from './pages/SalesSectionPage'
import ForeignersGuidePage from './pages/ForeignersGuidePage'
import PropertyPriceIndexPage from './pages/PropertyPriceIndexPage'
import OurServicesPage from './pages/OurServicesPage'
import HouseBuildersPage from './pages/HouseBuildersPage'
import FindAgentPage from './pages/FindAgentPage'
import LettingAgentsPage from './pages/LettingAgentsPage'
import PromotePropertyPage from './pages/PromotePropertyPage'
import HelpPage from './pages/HelpPage'
import { PostAd } from './pages/PostAd'
import SolarPanelsPage from './pages/SolarPanelsPage'
import SolarProviderDetailsPage from './pages/SolarProviderDetailsPage'
import InspirationDetailPage from './pages/InspirationDetailPage'
import MarketInsightsPage from './pages/MarketInsightsPage'
import InspirationPage from './pages/InspirationPage'
import InvestmentAdvisoryPage from './pages/InvestmentAdvisoryPage'
import HouseConstructionPage from './pages/HouseConstructionPage'
import HomeMoversPage from './pages/HomeMoversPage'
import MembershipBenefitsPage from './pages/MembershipBenefitsPage'
import NewsAndGuidesPage from './pages/NewsAndGuidesPage'
import PriceMeterPage from './pages/PriceMeterPage'
import PropertyBuyingGuidePage from './pages/PropertyBuyingGuidePage'
import CapitalGainsTaxPage from './pages/CapitalGainsTaxPage'
import PriceIndicesPage from './pages/PriceIndicesPage'
import MarketOutlookReportPage from './pages/MarketOutlookReportPage'
import HousesWantedPage from './pages/HousesWantedPage'
import LandWantedPage from './pages/LandWantedPage'
import ApartmentsWantedPage from './pages/ApartmentsWantedPage'
import RoomsWantedPage from './pages/RoomsWantedPage'
import CommercialWantedPage from './pages/CommercialWantedPage'
import Login from './components/Login'
import Register from './components/Register'
import BecomeAgentPage from './pages/BecomeAgentPage'
import ForgotPassword from './components/ForgotPassword'
import WantedPropertiesPage from './pages/WantedPropertiesPage'
import { ChatbotWidget } from './components/ChatbotWidget'

function LoginRoute() {
  const navigate = useNavigate()
  const searchParams = new URLSearchParams(window.location.search)
  const redirectTo = searchParams.get('redirect') || '/'
  return (
    <Login
      onSwitchToRegister={() => navigate('/register')}
      onSwitchToForgot={() => navigate('/forgot')}
      openProperty={() => navigate(redirectTo)}
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
          <Route path="/become-agent" element={<BecomeAgentPage />} />
          <Route path="/forgot" element={<ForgotRoute />} />
          <Route path="/post-ad" element={<PostAd />} />
          <Route path="/promote-property" element={<PromotePropertyPage />} />

          {/* Keep Navbar/Footer links from breaking */}
          <Route path="/properties" element={<SalesPage />} />
          <Route path="/kandy" element={<KandyPage />} />
          <Route path="/contact" element={<Homepage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/sales/house-price-index" element={<PropertyPriceIndexPage />} />
          <Route path="/sales/land-price-index" element={<PropertyPriceIndexPage />} />
          <Route path="/sales/market-insight" element={<MarketInsightsPage />} />
          <Route path="/sales/market-insights" element={<MarketInsightsPage />} />
          <Route path="/market-insight" element={<MarketInsightsPage />} />
          <Route path="/market-insights" element={<MarketInsightsPage />} />
          <Route path="/inspiration" element={<InspirationPage />} />
          <Route path="/inspiration/:inspirationId" element={<InspirationDetailPage />} />
          <Route path="/market-insights/inspiration/:inspirationId" element={<InspirationDetailPage />} />
          <Route path="/sales/:sectionSlug" element={<SalesSectionPage />} />
          <Route path="/rentals" element={<LettingAgentsPage />} />
          <Route path="/houses" element={<HousesPage />} />
          <Route path="/apartments" element={<ApartmentsPage />} />
          <Route path="/luxury" element={<LuxuryPage />} />
          <Route path="/land" element={<LandPage />} />
          <Route path="/commercial" element={<CommercialPage />} />
          <Route path="/house-builders" element={<HouseBuildersPage />} />
          <Route path="/house-construction" element={<HouseBuildersPage />} />
          <Route path="/construction" element={<HouseBuildersPage />} />
          <Route path="/home-construction" element={<HouseBuildersPage />} />
          <Route path="/our-services/home-construction" element={<HouseBuildersPage />} />
          <Route path="/services/home-construction" element={<HouseBuildersPage />} />
          <Route path="/home-needs/home-construction" element={<HouseBuildersPage />} />
          <Route path="/home-needs/house-construction" element={<HouseBuildersPage />} />
          <Route path="/home-needs/house-builders" element={<HouseBuildersPage />} />
          <Route path="/products/home-construction" element={<HouseBuildersPage />} />
          <Route path="/find-professionals/house-builders" element={<HouseBuildersPage />} />
          <Route path="/home-loans" element={<HomeLoanPage />} />
          <Route path="/home-loans/rates" element={<HomeLoanRatesPage />} />
          <Route path="/home-loans/calculator" element={<HomeLoanCalculatorPage />} />
          <Route path="/home-loans/comparison" element={<HomeLoanComparisonPage />} />
          <Route path="/home-loans/comparision" element={<HomeLoanComparisonPage />} />
          <Route path="/wanted/view-all" element={<WantedPropertiesPage />} />
          <Route path="/wanted/houses" element={<HousesWantedPage />} />
          <Route path="/wanted/apartments" element={<ApartmentsWantedPage />} />
          <Route path="/wanted/land" element={<LandWantedPage />} />
          <Route path="/wanted/commercial" element={<CommercialWantedPage />} />
          <Route path="/wanted/rooms" element={<RoomsWantedPage />} />
          <Route path="/sales/foreigners-guide" element={<ForeignersGuidePage />} />
          <Route path="/features/property-buying-for-foreigners.php" element={<ForeignersGuidePage />} />
          <Route path="/features/land-price-index.php" element={<PropertyPriceIndexPage />} />
          <Route path="/solar" element={<SolarPanelsPage />} />
          <Route path="/solar-and-hot-water" element={<SolarPanelsPage />} />
          <Route path="/solar-panels" element={<SolarPanelsPage />} />
          <Route path="/our-services/solar-panels/:providerSlug" element={<SolarProviderDetailsPage />} />
          <Route path="/our-services" element={<OurServicesPage />} />
          <Route path="/our-services/:serviceSlug" element={<OurServicesPage />} />
          <Route path="/find-agent" element={<FindAgentPage />} />
          <Route path="/agents-directory" element={<FindAgentPage />} />
          <Route path="/find-agents" element={<FindAgentPage />} />
          <Route path="/invest" element={<InvestmentAdvisoryPage />} />
          <Route path="/our-services/investing-in-sri-lanka" element={<InvestmentAdvisoryPage />} />
          <Route path="/house-construction" element={<HouseConstructionPage />} />
          <Route path="/our-services/house-construction" element={<HouseConstructionPage />} />
          <Route path="/house-builders" element={<HouseConstructionPage />} />
          <Route path="/find-professionals/house-construction" element={<HouseConstructionPage />} />
          <Route path="/movers" element={<HomeMoversPage />} />
          <Route path="/our-services/packers-movers" element={<HomeMoversPage />} />
          <Route path="/packers-movers" element={<HomeMoversPage />} />
          <Route path="/find-professionals/house-movers" element={<HomeMoversPage />} />
          <Route path="/membership-benefits" element={<MembershipBenefitsPage />} />
          <Route path="/membership" element={<MembershipBenefitsPage />} />
          <Route path="/news-and-guides" element={<NewsAndGuidesPage />} />
          <Route path="/guides" element={<NewsAndGuidesPage />} />
          <Route path="/news" element={<NewsAndGuidesPage />} />
          <Route path="/price-meter" element={<PriceMeterPage />} />
          <Route path="/property-buying-guide" element={<PropertyBuyingGuidePage />} />
          <Route path="/capital-gains-tax" element={<CapitalGainsTaxPage />} />
          <Route path="/price-indices" element={<PriceIndicesPage />} />
          <Route path="/our-services/house-price-index" element={<PriceIndicesPage />} />
          <Route path="/our-services/land-price-index" element={<PriceIndicesPage />} />
          <Route path="/market-outlook" element={<MarketOutlookReportPage />} />
          <Route path="/market-outlook-report" element={<MarketOutlookReportPage />} />
          <Route path="/wanted" element={<WantedPropertiesPage />} />
          <Route path="/more" element={<Homepage />} />
          <Route path="/aboutus" element={<Homepage />} />
          <Route path="/faqs" element={<Homepage />} />
          <Route path="/privacy-policy" element={<Homepage />} />
          <Route path="/terms" element={<Homepage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <ChatbotWidget />
      </main>
    </BrowserRouter>
  )
}

export default App
