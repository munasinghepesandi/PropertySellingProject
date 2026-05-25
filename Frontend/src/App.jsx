import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Homepage from './pages/homepage'
import SalesPage from './pages/SalesPage'
import KandyPage from './pages/KandyPage'
import HousesPage from './pages/houses'
import ApartmentsPage from './pages/apartments'
import LuxuryApartmentsPage from './pages/luxuryapartments'
import Land from './pages/land'
import CommercialPage from './pages/CommercialPage'
import PropertyPage from './pages/properties'
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
import Careers from './pages/Careers'
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
import AveragePage from './pages/average'
import FeaturedPage from './pages/featured'
import Featured1Page from './pages/featured1'
import Featured2Page from './pages/featured2'
import TopInvesmentPage from './pages/topinvesment'
import MidRangeApartmentsPage from './pages/midrangeapartments'
import CultivationLandsPage from './pages/cultivationlands'
import TrendingPage from './pages/trending'
import RoiPage from './pages/ROI'
import ViewAllNewProjectsPage from './pages/viewallnewprojects'
import PropertyDetails from './pages/viewmore'
import Pro from './pages/propertynew'
import CondoDirectoryPage from './pages/condodirectory'
import BungalowsPage from './pages/bungalows'
import VillasPage from './pages/villas'
import BareLandPage from './pages/bareland'
import BeachfrontLandPage from './pages/beachfrontland'
import LandPriceIndexPage from './pages/landpriceindex'
import InvestHomePage from './pages/investhome'
import BusinessAdvisoryPage from './pages/BusinessAdvisoryPage'
import Login from './components/Login'
import Register from './components/Register'
import MorePage from './pages/MorePage'
import MoreIndex from './pages/MoreIndex'
import BecomeAgentPage from './pages/BecomeAgentPage'
import BusinessListing from './pages/BusinessListing'
import Real from './pages/Real'
import Ideal from './pages/Ideal'
import BuyerSellerAssistance from './pages/BuyerSellerAssistance'
import PromoteProperty from './pages/PromoteProperty'
import IdealAppliances from './pages/IdealAppliances'
import Electronic from './pages/Electronic'
import Furniture from './pages/Furniture'
import Household from './pages/Household'
import SolarHotWater from './pages/SolarHotWater'
import Bathrooms from './pages/Bathrooms'
import Gardening from './pages/Gardening'
import Kitchen from './pages/Kitchen'
import Professionals from './pages/Professionals'
import Flooring from './pages/Flooring'
import HouseConstructionIdeal from './pages/HouseConstructionIdeal'
import Lighting from './pages/Lighting'
import ServiceProviders from './pages/ServiceProviders'
import OtherServices from './pages/OtherServices'
import MapsOfSriLanka from './pages/MapsOfSriLanka'
import AreaGuideKandy from './pages/AreaGuideKandy'
import PointsOfInterestKandy from './pages/PointsOfInterestKandy'
import Restaurant from './pages/Restaurant'
import BusinessCategory from './pages/BusinessCategory'
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
          <Route path="/properties" element={<PropertyPage />} />
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
          <Route path="/average" element={<AveragePage />} />
          <Route path="/featured" element={<FeaturedPage />} />
          <Route path="/featured1" element={<Featured1Page />} />
          <Route path="/featured2" element={<Featured2Page />} />
          <Route path="/topinvesment" element={<TopInvesmentPage />} />
          <Route path="/midrangeapartments" element={<MidRangeApartmentsPage />} />
          <Route path="/cultivationlands" element={<CultivationLandsPage />} />
          <Route path="/trending" element={<TrendingPage />} />
          <Route path="/ROI" element={<RoiPage />} />
          <Route path="/viewallnewprojects" element={<ViewAllNewProjectsPage />} />
          <Route path="/viewmore" element={<PropertyDetails />} />
          <Route path="/propertynew" element={<Pro />} />
          <Route path="/condodirectory" element={<CondoDirectoryPage />} />
          <Route path="/rentals" element={<PropertyPage />} />
          <Route path="/houses" element={<HousesPage />} />
          <Route path="/apartments" element={<ApartmentsPage />} />
          <Route path="/bungalows" element={<BungalowsPage />} />
          <Route path="/villas" element={<VillasPage />} />
          <Route path="/luxury" element={<LuxuryApartmentsPage />} />
          <Route path="/land" element={<Land />} />
          <Route path="/bareland" element={<BareLandPage />} />
          <Route path="/beachfrontland" element={<BeachfrontLandPage />} />
          <Route path="/landpriceindex" element={<LandPriceIndexPage />} />
          <Route path="/investhome" element={<InvestHomePage />} />
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
          <Route path="/letting-agents" element={<LettingAgentsPage />} />
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
          <Route path="/businessforsale" element={<BusinessAdvisoryPage />} />
          <Route path="/wanted" element={<WantedPropertiesPage />} />
          <Route path="/more/buyer-seller-assistance" element={<BuyerSellerAssistance />} />
          <Route path="/more/promote-your-property" element={<PromoteProperty />} />

          <Route path="/more/businesses" element={<BusinessListing />} />
          <Route path="/more/businesses/real-estate" element={<Real />} />
          <Route path="/more/businesses/new" element={<MorePage title={"New Businesses for Sale"} />} />
            <Route path="/more/businesses/real-estate" element={<Real />} />
            <Route path="/more/businesses/restaurant" element={<Restaurant />} />
            <Route path="/more/businesses/construction" element={<BusinessCategory />} />
            <Route path="/more/businesses/agriculture" element={<BusinessCategory />} />
            <Route path="/more/businesses/tech" element={<BusinessCategory />} />
            <Route path="/more/businesses/hospitality" element={<BusinessCategory />} />
            <Route path="/more/businesses/business" element={<BusinessCategory />} />
            <Route path="/more/businesses/manufacturing" element={<BusinessCategory />} />
            <Route path="/more/businesses/garment-textile" element={<BusinessCategory />} />
            <Route path="/more/businesses/services-bpo" element={<BusinessCategory />} />

          <Route path="/more/area-guides/maps-of-sri-lanka" element={<MapsOfSriLanka />} />
          <Route path="/more/area-guides/area-guide" element={<AreaGuideKandy />} />
          <Route path="/more/area-guides/points-of-interest" element={<PointsOfInterestKandy />} />

          <Route path="/more/guides/property-buying-guide" element={<MorePage title={"Property Buying Guide"} />} />
          <Route path="/more/guides/foreign-buyers-guide" element={<MorePage title={"Foreign Buyers' Guide"} />} />
          <Route path="/more/guides/capital-gains-tax" element={<MorePage title={"Capital Gains Tax"} />} />
          <Route path="/more/guides/house-price-index" element={<MorePage title={"Sri Lanka House Price Index"} />} />
          <Route path="/more/guides/land-price-index" element={<MorePage title={"Sri Lanka Land Price Index"} />} />
          <Route path="/more/guides/membership-benefits" element={<MorePage title={"Membership Benefits"} />} />

          <Route path="/more/news-and-guides" element={<MorePage title={"News & Guides"} />} />
          <Route path="/more/about-us" element={<MorePage title={"About us"} />} />
          <Route path="/more/careers" element={<Careers />} />
          <Route path="/more/contact-us" element={<MorePage title={"Contact Us"} />} />
          <Route path="/more/events" element={<MorePage title={"Events"} />} />
          <Route path="/more/faqs" element={<MorePage title={"FAQs"} />} />

          <Route path="/more/ideal-home" element={<Ideal />} />
          <Route path="/more/ideal-home/appliances" element={<IdealAppliances />} />
          <Route path="/more/ideal-home/electronics" element={<Electronic />} />
          <Route path="/more/ideal-home/furniture" element={<Furniture />} />
          <Route path="/more/ideal-home/household-items" element={<Household />} />
          <Route path="/more/ideal-home/solar-hot-water" element={<SolarHotWater />} />
          <Route path="/more/ideal-home/bathrooms" element={<Bathrooms />} />
          <Route path="/more/ideal-home/gardening" element={<Gardening />} />
          <Route path="/more/ideal-home/kitchen" element={<Kitchen />} />
          <Route path="/more/ideal-home/professionals" element={<Professionals />} />
          <Route path="/more/ideal-home/flooring" element={<Flooring />} />
          <Route path="/more/ideal-home/house-construction" element={<HouseConstructionIdeal />} />
          <Route path="/more/ideal-home/lighting" element={<Lighting />} />
          <Route path="/more/ideal-home/service-providers" element={<ServiceProviders />} />
          <Route path="/more/ideal-home/other-services" element={<OtherServices />} />

          <Route path="/more" element={<MoreIndex />} />
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
