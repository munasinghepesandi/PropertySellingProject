import React, { useEffect, useMemo, useState } from "react";
import { Search, Home, ChevronDown, Menu, X } from "lucide-react";
import { useNavigate, Link, useLocation } from "react-router-dom";

const AUTH_STORAGE_KEY = 'lanka_property_current_user';
const REGISTERED_USERS_KEY = 'lanka_property_registered_users';

function readCurrentUser() {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const storedUser = window.localStorage.getItem(AUTH_STORAGE_KEY);
    return storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    return null;
  }
}

function readRegisteredUsers() {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const storedUsers = window.localStorage.getItem(REGISTERED_USERS_KEY);
    return storedUsers ? JSON.parse(storedUsers) : [];
  } catch (error) {
    return [];
  }
}

export function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentUser, setCurrentUser] = useState(() => readCurrentUser());
  const [salesMenuOpen, setSalesMenuOpen] = useState(false);
  const [ourServicesMenuOpen, setOurServicesMenuOpen] = useState(false);
  const [homeLoansMenuOpen, setHomeLoansMenuOpen] = useState(false);
  const [marketInsightsMenuOpen, setMarketInsightsMenuOpen] = useState(false);
  const [agentMenuOpen, setAgentMenuOpen] = useState(false);
  const [wantedMenuOpen, setWantedMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSalesOpen, setMobileSalesOpen] = useState(false);
  const [mobileWantedOpen, setMobileWantedOpen] = useState(false);
  const [mobileOurServicesOpen, setMobileOurServicesOpen] = useState(false);
  const [mobileHomeLoansOpen, setMobileHomeLoansOpen] = useState(false);
  const [mobileMarketInsightsOpen, setMobileMarketInsightsOpen] = useState(false);
  const [mobileAgentOpen, setMobileAgentOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [mobileRentalsOpen, setMobileRentalsOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location?.pathname === "/";

  function handleNavigate(path, openInEdge = false) {
    if (openInEdge && typeof window !== 'undefined') {
      const url = window.location.origin + path;
      try {
        const win = window.open('microsoft-edge:' + url, '_blank');
        if (!win) {
          navigate(path);
        }
      } catch (err) {
        navigate(path);
      }
    } else {
      navigate(path);
    }
  }

  useEffect(() => {
    const updateViewport = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    const handleStorageChange = () => {
      setCurrentUser(readCurrentUser());
    };

    updateViewport();
    handleStorageChange();
    window.addEventListener("resize", updateViewport);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener("resize", updateViewport);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const displayName =
    currentUser?.fullName ||
    currentUser?.name ||
    readRegisteredUsers().find((user) => user.email?.toLowerCase() === currentUser?.email?.toLowerCase())
      ?.fullName ||
    '';

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(AUTH_STORAGE_KEY);
      window.dispatchEvent(new Event('storage'));
    }
    setCurrentUser(null);
    setMobileMenuOpen(false);
  };

  const handlePostAdClick = () => {
    if (currentUser) {
      navigate('/post-ad');
      return;
    }

    navigate('/login?redirect=%2Fpost-ad');
  };

  const primary = "#2A6F86";
  const dark = "#123B44";

  const navStyle = {
    position: "sticky",
    top: 0,
    zIndex: 50,
    backgroundColor: "#ffffff",
    color: "white",
  };

  const topBarStyle = {
    backgroundColor: isHome ? '#000000' : 'white',
    color: isHome ? 'white' : '#0f172a',
    borderBottom: isHome ? 'none' : '1px solid #e2e8f0',
  };

  const topBarInnerStyle = {
    maxWidth: "1800px",
    margin: "0 auto",
    padding: "8px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    flexWrap: "wrap",
  };

  const topActionsStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    flexWrap: "wrap",
  };

  const brandStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
    fontWeight: 800,
    fontSize: "22px",
    color: isHome ? 'white' : '#0f172a',
  };

  const brandAccentStyle = {
    color: primary,
  };

  const containerStyle = {
    maxWidth: "1800px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "68px",
    gap: "14px",
  };

  const logoStyle = {
    fontWeight: "bold",
    fontSize: "20px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  };

  const logoIconWrapper = {
    backgroundColor: primary,
    padding: "4px",
    borderRadius: "50%",
    marginRight: "8px",
  };

  const menuStyle = {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    flexWrap: "wrap",
  };

  const menuItemStyle = {
    cursor: "pointer",
    fontSize: "14px",
    color: "#ffffff",
    transition: "0.3s",
    fontWeight: 600,
  };

  const menuLinkStyle = {
    ...menuItemStyle,
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "12px 0",
    background: "transparent",
    border: "none",
  };

  const desktopLinkStyle = {
    ...menuItemStyle,
    background: "transparent",
    border: "none",
    padding: "12px 0",
  };

  const topLinks = [
    { label: "Rentals", to: "/rentals" },
    { label: "Land", to: "/land" },
    { label: "Apartment Finder", to: "/contact", badge: "New" },
    { label: "Invest", to: "/invest" },
    { label: "More", to: "/more" },
  ];

  const rentalsMenuColumns = useMemo(
    () => [
      {
        title: "Find property for Rent",
        items: [
          { label: "All property for Rent", to: "/properties" },
          { label: "Houses", to: "/houses" },
          { label: "Apartments", to: "/apartments" },
          { label: "Bungalows", to: "/bungalows" },
          { label: "Villas", to: "/villas" },
        ],
      },
      {
        title: "Featured Properties",
        items: [
          { label: "View All Featured Properties", to: "/featured" },
          { label: "Newly built property for rent", to: "/featured1" },
          { label: "Urgent properties to let", to: "/featured2" },
          { label: "Short term rentals", to: "/featured" },
        ],
      },
      {
        title: "Learn and Discover",
        items: [{ label: "House Prices", to: "/average" }],
      },
    ],
    []
  );

  const apartmentFinderMenuItems = useMemo(
    () => [
      { label: "View All New Projects", to: "/viewallnewprojects" },
      { label: "Featured Projects", to: "/featured1" },
      { label: "Apartment Finder", to: "/featured" },
      { label: "Featured Land Projects", to: "/featured2" },
      { label: "Condo Directory", to: "/condodirectory" },
    ],
    []
  );

  const landMenuColumns = useMemo(
    () => [
      {
        title: "Find Land for Sale or Lease",
        items: [
          { label: "Find All Land for Sale or Lease", to: "/land" },
          { label: "Bare Land", to: "/bareland" },
          { label: "Beachfront Land", to: "/beachfrontland" },
        ],
      },
      {
        title: "Featured Properties",
        items: [
          { label: "Featured Land Projects", to: "/featured2" },
          { label: "Investment Lands within 1 hour of Colombo", to: "/investhome" },
          { label: "Beachfront properties", to: "/beachfrontland" },
        ],
      },
      {
        title: "Learn and Discover",
        items: [{ label: "Land Prices in Greater Colombo", to: "/landpriceindex" }],
      },
    ],
    []
  );

  const investMenuColumns = useMemo(
    () => [
      {
        title: "Invest Section",
        items: [
          { label: "Invest Home", to: "/investhome" },
          { label: "Top Invesment Properties", to: "/topinvesment" },
          { label: "Luxury Apartments", to: "/luxury" },
          { label: "Mid-range Apartments", to: "/midrangeapartments" },
          { label: "Cultivation lands", to: "/cultivationlands" },
        ],
      },
      {
        title: "Tools & Advice",
        items: [
          { label: "ROI Calculator", to: "/ROI" },
          { label: "Trending Properties", to: "/trending" },
          { label: "House Price Index", to: "/housepriceindex" },
          { label: "Land Price Index", to: "/landpriceindex" },
        ],
      },
    ],
    []
  );

  const navItemOrder = {
    Rentals: 1,
    Land: 2,
    "Apartment Finder": 3,
    "Market Insights": 7,
    Wanted: 8,
    "Find Agent": 9,
    More: 10,
  };

  const megaMenuColumns = useMemo(
    () => [
      {
        title: "Find Property for sale",
        items: [
          { label: "View all", to: "/sales/view-all" },
          { label: "Houses", to: "/sales/houses" },
          { label: "Apartments", to: "/sales/apartments" },
          { label: "Commercial", to: "/sales/commercial" },
          { label: "Bungalows", to: "/sales/bungalows" },
          { label: "Villas", to: "/sales/villas" },
          { label: "Studio / Bedsit", to: "/sales/studio-bedsit" },
          { label: "Warehouse", to: "/sales/warehouse" },
        ],
      },
      {
        title: "New Developments",
        items: [
          { label: "Featured developments for sale", to: "/sales/featured-developments" },
          { label: "New Beachfront Projects", to: "/sales/new-beachfront-projects" },
        ],
      },
      {
        title: "Featured Properties",
        items: [
          { label: "Newly built property for sale", to: "/sales/newly-built-property" },
          { label: "Colonial Houses for sale", to: "/sales/colonial-houses" },
          { label: "Urgent properties for sale", to: "/sales/urgent-properties" },
          { label: "Luxury Apartments", to: "/luxury" },
          { label: "Mid-range Apartments", to: "/sales/mid-range-apartments" },
          { label: "Bungalows in Nuwara Eliya", to: "/sales/bungalows-nuwara-eliya" },
          { label: "Houses in Battaramulla area", to: "/sales/houses-battaramulla" },
          { label: "Commercial property for sale in Colombo", to: "/sales/commercial-colombo" },
          { label: "Hotels for Sale", to: "/sales/hotels-for-sale" },
          { label: "Warehouses for sale", to: "/sales/warehouses-for-sale" },
          { label: "Brand new apartment", to: "/sales/brand-new-apartment" },
          { label: "Beachfront properties for sale", to: "/sales/beachfront-properties" },
          { label: "Beachfront Apartments for sale", to: "/sales/beachfront-apartments" },
        ],
      },
      {
        title: "Learn and Discover",
        items: [
          { label: "Sri Lanka House Price Index", to: "/sales/house-price-index" },
          { label: "Sri Lanka Land Price Index", to: "/land" },
          { label: "Guide for foreigners buying property", to: "/features/property-buying-for-foreigners.php" },
        ],
      },
    ],
    []
  );

  const wantedMenuColumns = useMemo(
    () => [
      {
        title: "Wanted Properties",
        items: [
          { label: "View All Wanted Properties", to: "/wanted/view-all" },
          { label: "Houses wanted", to: "/wanted/houses" },
          { label: "Apartments wanted", to: "/wanted/apartments" },
        ],
      },
      {
        title: "More Wanted",
        items: [
          { label: "Land wanted", to: "/wanted/land" },
          { label: "Commercial Buildings", to: "/wanted/commercial" },
          { label: "Rooms wanted", to: "/wanted/rooms" },
          { label: "Post Your Ad", to: "/post-ad" },
        ],
      },
    ],
    []
  );

  const ourServicesMenuColumns = useMemo(
    () => [
      {
        title: "Buyer & Seller Assistance",
        items: [
          { label: "Property Valuations", to: "/our-services/property-valuations" },
          { label: "Legal Assistance", to: "/our-services/legal-assistance" },
          { label: "Document preparation & submission", to: "/our-services/document-preparation" },
          { label: "Mortgage Advice", to: "/our-services/mortgage-advice" },
          { label: "Fees & taxes payment", to: "/our-services/fees-taxes-payment" },
          { label: "Personal Assistance", to: "/our-services/personal-assistance" },
          { label: "Other Servicess", to: "/our-services/other-services" },
        ],
      },
      {
        title: "Market Research and Advisory",
        items: [
          { label: "Advisory", to: "/our-services/advisory" },
          { label: "Property Buying Advisory", to: "/our-services/property-buying-advisory" },
          { label: "Business Buying or Selling Advisory", to: "/our-services/business-advisory" },
          { label: "Property Buying Assistance for Foreigners", to: "/our-services/foreigners-buying-assistance" },
          { label: "Advisory on Investing in Sri Lanka", to: "/our-services/investing-in-sri-lanka" },
        ],
      },
      {
        title: "Home Needs",
        items: [
          { label: "House Construction", to: "/our-services/house-construction" },
          { label: "Packers & Movers", to: "/our-services/packers-movers" },
          { label: "Solar Panels", to: "/our-services/solar-panels" },
        ],
      },
    ],
    []
  );

  const homeLoansMenuItems = useMemo(
    () => [
      {
        label: "Home Loan Rates",
        to: "/home-loans/rates",
        description: "Compare current bank offers and headline rates.",
      },
      {
        label: "Home Loan Calculator",
        to: "/home-loans/calculator",
        description: "Estimate monthly repayments before you apply.",
      },
      {
        label: "Home Loan Comparison",
        to: "/home-loans/comparison",
        description: "Compare banks by rate, tenure, fees, and features.",
      },
    ],
    []
  );

  const marketInsightsMenuColumns = useMemo(
    () => [
      {
        title: "Insights and Guides",
        items: [
          { label: "Market Insights", to: "/market-insights" },
          { label: "Price Meter", to: "/sales/house-price-index" },
          { label: "Property Buying Guide", to: "/features/property-buying-for-foreigners.php" },
          { label: "Foreign Buyers' Guide", to: "/features/property-buying-for-foreigners.php" },
          { label: "Capital Gains Tax", to: "/features/property-buying-for-foreigners.php#taxes" },
        ],
      },
      {
        title: "Price Indices",
        items: [
          { label: "Sri Lanka House Price Index", to: "/sales/house-price-index" },
          { label: "Sri Lanka Land Price Index", to: "/land" },
          { label: "Membership Benefits", to: "/membership-benefits" },
          { label: "Market Outlook Report", to: "/market-outlook-report" },
          { label: "News & Guides", to: "/news-and-guides" },
        ],
      },
    ],
    []
  );

  const moreMenuColumns = useMemo(
    () => [
      {
        title: "Assistance",
        items: [
          { label: "Buyer & Seller Assistance", to: "/more/buyer-seller-assistance" },
          { label: "Promote your property", to: "/more/promote-your-property" },
        ],
      },
      {
        title: "Businesses for Sale",
        items: [
          { label: "New", to: "/more/businesses/new" },
          { label: "View All Businesses for Sale", to: "/more/businesses" },
          { label: "Real Estate", to: "/more/businesses/real-estate" },
          { label: "Restaurant", to: "/more/businesses/restaurant" },
          { label: "Construction", to: "/more/businesses/construction" },
          { label: "Agriculture", to: "/more/businesses/agriculture" },
          { label: "Tech", to: "/more/businesses/tech" },
          { label: "Hospitality", to: "/more/businesses/hospitality" },
          { label: "Business", to: "/more/businesses/business" },
          { label: "Manufacturing", to: "/more/businesses/manufacturing" },
          { label: "Garment-Textile", to: "/more/businesses/garment-textile" },
          { label: "Services-BPO", to: "/more/businesses/services-bpo" },
        ],
      },
      {
        title: "Area Guides",
        items: [
          { label: "Maps of Sri Lanka", to: "/more/area-guides/maps-of-sri-lanka" },
          { label: "Area Guide", to: "/more/area-guides/area-guide" },
          { label: "Point of Interests", to: "/more/area-guides/points-of-interest" },
        ],
      },
          {
            title: "Guides & Indices",
            items: [
              { label: "Property Buying Guide", to: "/property-buying-guide" },
              { label: "Foreign Buyers' Guide", to: "/sales/foreigners-guide" },
              { label: "Capital Gains Tax", to: "/capital-gains-tax" },
              { label: "Sri Lanka House Price Index", to: "/sales/house-price-index" },
              { label: "Sri Lanka Land Price Index", to: "/landpriceindex" },
              { label: "Membership Benefits", to: "/membership-benefits" },
            ],
          },
      {
        title: "Ideal Home",
        items: [
          { label: "Appliances & Electronics", to: "/more/ideal-home/appliances" },
          { label: "Furniture", to: "/more/ideal-home/furniture" },
          { label: "Household items", to: "/more/ideal-home/household-items" },
          { label: "Solar & Hot Water", to: "/more/ideal-home/solar-hot-water" },
          { label: "Bathrooms", to: "/more/ideal-home/bathrooms" },
          { label: "Gardening", to: "/more/ideal-home/gardening" },
          { label: "Kitchen", to: "/more/ideal-home/kitchen" },
          { label: "Professionals", to: "/more/ideal-home/professionals" },
          { label: "Flooring", to: "/more/ideal-home/flooring" },
          { label: "House Construction", to: "/more/ideal-home/house-construction" },
          { label: "Lighting", to: "/more/ideal-home/lighting" },
          { label: "Service Providers", to: "/more/ideal-home/service-providers" },
          { label: "Other Services", to: "/more/ideal-home/other-services" },
        ],
      },
      {
        title: "News & About",
        items: [
          { label: "News & Guides", to: "/news-and-guides" },
          { label: "About us", to: "/aboutus" },
          { label: "Careers", to: "/more/careers" },
          { label: "Contact Us", to: "/contact" },
          { label: "Events", to: "/more/events" },
          { label: "FAQs", to: "/faqs" },
        ],
      },
    ],
    []
  );

  const agentMenuItems = useMemo(
    () => [
      {
        title: "Agent Services",
        items: [
          { label: "Find Agents / Agents Directory", to: "/find-agent" },
          { label: "View All Agents / Agents Directory", to: "/agents-directory" },
          { label: "Become an Agent", to: "/become-agent" },
          { label: "Residential sales", to: "/sales" },
          { label: "Promote Your Property", to: "/promote-property" },
          { label: "Letting Agents", to: "/letting-agents" },
          { label: "Commercial property agents", to: "/commercial" },
          { label: "Land Sales", to: "/land" },
        ],
      },
    ],
    []
  );

  const searchWrapper = { position: "relative" };

  const searchInputStyle = {
    padding: "8px 12px 8px 36px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.18)",
    backgroundColor: "#0b2f63",
    color: "#e2e8f0",
    outline: "none",
    width: "240px",
    fontSize: "14px",
  };

  const buttonStyle = {
    padding: "8px 14px",
    borderRadius: "8px",
    fontSize: "13px",
    cursor: "pointer",
    fontWeight: "500",
    border: "none",
  };

  const loginStyle = {
    ...buttonStyle,
    backgroundColor: "transparent",
    color: "#0f172a",
    border: "1px solid #cbd5e1",
  };

  const registerStyle = {
    ...buttonStyle,
    backgroundColor: primary,
    color: "white",
  };

  const postAdStyle = {
    ...buttonStyle,
    backgroundColor: primary,
    color: "white",
  };

  const topLinkStyle = {
    fontSize: "14px",
    fontWeight: 600,
    color: isHome ? 'white' : '#0f172a',
    background: "transparent",
    border: "none",
    cursor: "pointer",
  };

  const mobilePanelStyle = {
    display: mobileMenuOpen ? "grid" : "none",
    gap: "14px",
    padding: "0 20px 18px",
    borderTop: "1px solid rgba(148, 163, 184, 0.2)",
    backgroundColor: primary,
  };

  const mobileLinkStyle = {
    width: "100%",
    textAlign: "left",
    border: "1px solid rgba(203, 213, 225, 0.18)",
    backgroundColor: "rgba(15, 23, 42, 0.35)",
    color: "white",
    padding: "12px 14px",
    borderRadius: "12px",
    fontSize: "14px",
    fontWeight: "600",
  };

  const mobileSubLinkStyle = {
    ...mobileLinkStyle,
    backgroundColor: "rgba(33, 113, 181, 0.14)",
    color: "#e2e8f0",
  };

  return (
    <nav style={navStyle}>
      <div style={topBarStyle}>
        <div style={topBarInnerStyle}>
          <div style={brandStyle} onClick={() => navigate("/")}> 
            <div style={{ ...logoIconWrapper, padding: "6px" }}>
              <Home style={{ height: "18px", width: "18px", color: "white" }} />
            </div>
            <span>
              LankaProperty<span style={brandAccentStyle}>Web</span>
            </span>
          </div>

          <div style={topActionsStyle}>
            {currentUser ? (
              <>
                {displayName ? (
                  <span
                    style={{
                      ...topLinkStyle,
                      cursor: 'default',
                      color: primary,
                      border: '1px solid rgba(33, 113, 181, 0.2)',
                      padding: '8px 14px',
                      borderRadius: '999px',
                      backgroundColor: 'rgba(33, 113, 181, 0.08)',
                    }}
                  >
                    {displayName}
                  </span>
                ) : null}
                <button type="button" style={topLinkStyle} onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <button type="button" style={topLinkStyle} onClick={() => navigate('/login') }>
                  Login
                </button>
              </>
            )}
            <button type="button" style={topLinkStyle} onClick={() => navigate('/help')}>
              Help
            </button>
            <button type="button" style={postAdStyle} onClick={handlePostAdClick}>
              Post Your Ad
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          ...containerStyle,
          backgroundColor: dark,
          color: "white",
          minHeight: "68px",
        }}
      >
        <div style={{ ...menuStyle, display: isMobile ? "none" : "flex", flex: 1 }}>
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setSalesMenuOpen(true)}
            onMouseLeave={() => setSalesMenuOpen(false)}
          >
            <button
              type="button"
              style={{ ...menuLinkStyle, fontSize: "15px" }}
              onClick={() => {
                setSalesMenuOpen(false);
                navigate("/sales");
              }}
            >
              Sales
            </button>

            {salesMenuOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  minWidth: "920px",
                  maxWidth: "95vw",
                  backgroundColor: "#ffffff",
                  color: "#0f172a",
                  borderRadius: "20px",
                  boxShadow: "0 18px 45px rgba(15, 23, 42, 0.16)",
                  padding: "22px 24px 24px",
                  display: "grid",
                  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                  gap: "20px",
                  border: "1px solid rgba(148, 163, 184, 0.18)",
                }}
              >
                {megaMenuColumns.map((column) => (
                  <div key={column.title}>
                    <div
                      style={{
                        fontSize: "11px",
                        fontWeight: "800",
                        textTransform: "uppercase",
                        letterSpacing: "0.16em",
                        color: "#0f172a",
                        paddingBottom: "8px",
                        marginBottom: "12px",
                        borderBottom: "1px solid #d7dee8",
                      }}
                    >
                      {column.title}
                    </div>

                    <div style={{ display: "grid", gap: "10px" }}>
                      {column.items.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => {
                            setSalesMenuOpen(false);
                            navigate(item.to);
                          }}
                          style={{
                            textAlign: "left",
                            border: "none",
                            background: "transparent",
                            padding: "0",
                            fontSize: "14px",
                            lineHeight: "1.35",
                            color: "#334155",
                            cursor: "pointer",
                            fontWeight: 500,
                          }}
                          onMouseEnter={(event) => {
                            event.currentTarget.style.color = primary;
                          }}
                          onMouseLeave={(event) => {
                            event.currentTarget.style.color = "#334155";
                          }}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            style={{ position: "relative", order: navItemOrder["Our Services"] }}
            onMouseEnter={() => setOurServicesMenuOpen(true)}
            onMouseLeave={() => setOurServicesMenuOpen(false)}
          >
           

            {ourServicesMenuOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  minWidth: "920px",
                  maxWidth: "95vw",
                  backgroundColor: "#ffffff",
                  color: "#0f172a",
                  borderRadius: "20px",
                  boxShadow: "0 18px 45px rgba(15, 23, 42, 0.16)",
                  padding: "22px 24px 24px",
                  display: "grid",
                  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                  gap: "20px",
                  border: "1px solid rgba(148, 163, 184, 0.18)",
                }}
              >
                {ourServicesMenuColumns.map((column) => (
                  <div key={column.title}>
                    <div
                      style={{
                        fontSize: "11px",
                        fontWeight: "800",
                        textTransform: "uppercase",
                        letterSpacing: "0.16em",
                        color: "#0f172a",
                        paddingBottom: "8px",
                        marginBottom: "12px",
                        borderBottom: "1px solid #d7dee8",
                      }}
                    >
                      {column.title}
                    </div>

                    <div style={{ display: "grid", gap: "10px" }}>
                      {column.items.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => {
                            setOurServicesMenuOpen(false);
                            navigate(item.to);
                          }}
                          style={{
                            textAlign: "left",
                            border: "none",
                            background: "transparent",
                            padding: "0",
                            fontSize: "14px",
                            lineHeight: "1.35",
                            color: "#334155",
                            cursor: "pointer",
                            fontWeight: 500,
                          }}
                          onMouseEnter={(event) => {
                            event.currentTarget.style.color = primary;
                          }}
                          onMouseLeave={(event) => {
                            event.currentTarget.style.color = "#334155";
                          }}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            style={{ position: "relative", order: navItemOrder["Home Loans"] }}
            onMouseEnter={() => setHomeLoansMenuOpen(true)}
            onMouseLeave={() => setHomeLoansMenuOpen(false)}
          >
           

            {homeLoansMenuOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  minWidth: "920px",
                  maxWidth: "95vw",
                  backgroundColor: "#ffffff",
                  color: "#0f172a",
                  borderRadius: "20px",
                  boxShadow: "0 18px 45px rgba(15, 23, 42, 0.16)",
                  padding: "22px 24px 24px",
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "14px",
                  border: "1px solid rgba(148, 163, 184, 0.18)",
                }}
              >
                {homeLoansMenuItems.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => {
                      setHomeLoansMenuOpen(false);
                      navigate(item.to);
                    }}
                    style={{
                      textAlign: "left",
                      border: "none",
                      background: "transparent",
                      borderRadius: "12px",
                      padding: "14px 16px",
                      color: "#334155",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.backgroundColor = "#f1f5f9";
                      event.currentTarget.style.color = primary;
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.backgroundColor = "transparent";
                      event.currentTarget.style.color = "#334155";
                    }}
                  >
                    <span style={{ display: "block", fontSize: "16px", fontWeight: 800 }}>{item.label}</span>
                    <span style={{ display: "block", marginTop: "4px", fontSize: "14px", lineHeight: 1.4, color: "#64748b" }}>
                      {item.description}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div
            style={{ position: "relative", order: navItemOrder["Market Insights"] }}
            onMouseEnter={() => setMarketInsightsMenuOpen(true)}
            onMouseLeave={() => setMarketInsightsMenuOpen(false)}
          >
            <button
              type="button"
              style={{ ...menuLinkStyle, fontSize: "15px" }}
              onClick={() => {
                setMarketInsightsMenuOpen(false);
                navigate("/market-insights");
              }}
            >
              Market Insights
            </button>

            {marketInsightsMenuOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  minWidth: "920px",
                  maxWidth: "95vw",
                  backgroundColor: "#ffffff",
                  color: "#0f172a",
                  borderRadius: "20px",
                  boxShadow: "0 18px 45px rgba(15, 23, 42, 0.16)",
                  padding: "22px 24px 24px",
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: "18px",
                  border: "1px solid rgba(148, 163, 184, 0.18)",
                }}
              >
                {marketInsightsMenuColumns.map((column) => (
                  <div key={column.title}>
                    <div
                      style={{
                        fontSize: "11px",
                        fontWeight: "800",
                        textTransform: "uppercase",
                        letterSpacing: "0.16em",
                        color: "#0f172a",
                        paddingBottom: "8px",
                        marginBottom: "12px",
                        borderBottom: "1px solid #d7dee8",
                      }}
                    >
                      {column.title}
                    </div>

                    <div style={{ display: "grid", gap: "10px" }}>
                      {column.items.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => {
                            setMarketInsightsMenuOpen(false);
                            navigate(item.to);
                          }}
                          style={{
                            textAlign: "left",
                            border: "none",
                            background: "transparent",
                            padding: "0",
                            fontSize: "14px",
                            lineHeight: "1.35",
                            color: "#334155",
                            cursor: "pointer",
                            fontWeight: 500,
                          }}
                          onMouseEnter={(event) => {
                            event.currentTarget.style.color = primary;
                          }}
                          onMouseLeave={(event) => {
                            event.currentTarget.style.color = "#334155";
                          }}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            style={{ position: "relative", order: navItemOrder["Wanted"] }}
            onMouseEnter={() => setWantedMenuOpen(true)}
            onMouseLeave={() => setWantedMenuOpen(false)}
          >
            <button
              type="button"
              style={{ ...menuLinkStyle, fontSize: "15px" }}
              onClick={() => {
                setWantedMenuOpen(false);
                navigate("/wanted");
              }}
            >
              Wanted
            </button>

            {wantedMenuOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  minWidth: "920px",
                  maxWidth: "95vw",
                  backgroundColor: "#ffffff",
                  color: "#0f172a",
                  borderRadius: "20px",
                  boxShadow: "0 18px 45px rgba(15, 23, 42, 0.16)",
                  padding: "22px 24px 24px",
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: "18px",
                  border: "1px solid rgba(148, 163, 184, 0.18)",
                }}
              >
                {wantedMenuColumns.map((column) => (
                  <div key={column.title}>
                    <div
                      style={{
                        fontSize: "11px",
                        fontWeight: "800",
                        textTransform: "uppercase",
                        letterSpacing: "0.16em",
                        color: "#0f172a",
                        paddingBottom: "8px",
                        marginBottom: "12px",
                        borderBottom: "1px solid #d7dee8",
                      }}
                    >
                      {column.title}
                    </div>

                    <div style={{ display: "grid", gap: "10px" }}>
                      {column.items.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => {
                            setWantedMenuOpen(false);
                            navigate(item.to);
                          }}
                          style={{
                            textAlign: "left",
                            border: "none",
                            background: "transparent",
                            padding: "0",
                            fontSize: "14px",
                            lineHeight: "1.35",
                            color: "#334155",
                            cursor: "pointer",
                            fontWeight: 500,
                          }}
                          onMouseEnter={(event) => {
                            event.currentTarget.style.color = primary;
                          }}
                          onMouseLeave={(event) => {
                            event.currentTarget.style.color = "#334155";
                          }}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            style={{ position: "relative", order: navItemOrder["Find Agent"] }}
            onMouseEnter={() => setAgentMenuOpen(true)}
            onMouseLeave={() => setAgentMenuOpen(false)}
          >
            <button
              type="button"
              style={{ ...menuLinkStyle, fontSize: "15px" }}
              onClick={() => {
                setAgentMenuOpen(false);
                navigate("/find-agent");
              }}
            >
              Find Agent
            </button>

            {agentMenuOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  minWidth: "920px",
                  maxWidth: "95vw",
                  backgroundColor: "#ffffff",
                  color: "#0f172a",
                  borderRadius: "20px",
                  boxShadow: "0 18px 45px rgba(15, 23, 42, 0.16)",
                  padding: "22px 24px 24px",
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: "18px",
                  border: "1px solid rgba(148, 163, 184, 0.18)",
                }}
              >
                {agentMenuItems.map((column) => (
                  <div key={column.title}>
                    <div
                      style={{
                        fontSize: "11px",
                        fontWeight: "800",
                        textTransform: "uppercase",
                        letterSpacing: "0.16em",
                        color: "#0f172a",
                        paddingBottom: "8px",
                        marginBottom: "12px",
                        borderBottom: "1px solid #d7dee8",
                      }}
                    >
                      {column.title}
                    </div>

                    <div style={{ display: "grid", gap: "10px" }}>
                      {column.items.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => {
                            setAgentMenuOpen(false);
                            navigate(item.to);
                          }}
                          style={{
                            textAlign: "left",
                            border: "none",
                            background: "transparent",
                            padding: "0",
                            fontSize: "15px",
                            lineHeight: "1.35",
                            color: "#334155",
                            cursor: "pointer",
                            fontWeight: 500,
                          }}
                          onMouseEnter={(event) => {
                            event.currentTarget.style.color = primary;
                          }}
                          onMouseLeave={(event) => {
                            event.currentTarget.style.color = "#334155";
                          }}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            className="group relative"
            style={{ order: navItemOrder.Rentals }}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 border-0 bg-transparent px-0 py-3 text-sm font-semibold text-white transition hover:text-sky-300"
              onClick={() => navigate("/properties")}
            >
              Rentals
            </button>
            <div className="invisible absolute left-0 top-full z-50 w-[920px] max-w-[95vw] rounded-[20px] bg-white px-6 py-5 text-black opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-4">
                {rentalsMenuColumns.map((column) => (
                  <div key={column.title}>
                    <h3 className="mb-3 border-b pb-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-900">{column.title}</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {column.items.map((item) => (
                        <li key={item.label}>
                          <Link to={item.to} className="block cursor-pointer hover:text-blue-700">
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="group relative"
            style={{ order: navItemOrder["Apartment Finder"] }}
          >
            <button
              type="button"
              className="inline-flex items-center gap-2 border-0 bg-transparent px-0 py-3 text-sm font-semibold text-white transition hover:text-sky-300"
              onClick={() => navigate("/featured")}
            >
              Apartment Finder
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] font-semibold uppercase text-white">New</span>
            </button>
            <div className="invisible absolute left-0 top-full z-50 w-[920px] max-w-[95vw] rounded-[20px] bg-white px-6 py-5 text-black opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <h3 className="mb-3 border-b pb-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-900">Find New Projects</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {apartmentFinderMenuItems.map((item) => (
                      <li key={item.label}>
                        <Link to={item.to} className="block cursor-pointer hover:text-blue-700">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="group relative"
            style={{ order: navItemOrder.Land }}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 border-0 bg-transparent px-0 py-3 text-sm font-semibold text-white transition hover:text-sky-300"
              onClick={() => navigate("/land")}
            >
              Land
            </button>
            <div className="invisible absolute left-0 top-full z-50 w-[920px] max-w-[95vw] rounded-[20px] bg-white px-6 py-5 text-black opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-4">
                {landMenuColumns.map((column) => (
                  <div key={column.title}>
                    <h3 className="mb-3 border-b pb-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-900">{column.title}</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {column.items.map((item) => (
                        <li key={item.label}>
                          <Link to={item.to} className="block cursor-pointer hover:text-blue-700">
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="group relative"
            style={{ order: navItemOrder.Invest }}
          >
            
            <div className="invisible absolute left-0 top-full z-50 w-[920px] max-w-[95vw] rounded-[20px] bg-white px-6 py-5 text-black opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-4">
                {investMenuColumns.map((column) => (
                  <div key={column.title}>
                    <h3 className="mb-3 border-b pb-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-900">{column.title}</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {column.items.map((item) => (
                        <li
                          key={item.label}
                          className="cursor-pointer hover:text-blue-700"
                          onClick={() => navigate(item.to)}
                        >
                          {item.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            style={{ position: "relative", order: navItemOrder.More }}
            onMouseEnter={() => setMoreMenuOpen(true)}
            onMouseLeave={() => setMoreMenuOpen(false)}
          >
            <button
              type="button"
              className="border-0 bg-transparent px-0 py-3 text-sm font-semibold text-white transition hover:text-sky-300"
              onClick={() => {
                setMoreMenuOpen(false);
                navigate("/more");
              }}
            >
              More
            </button>

            {moreMenuOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  minWidth: "560px",
                  maxHeight: "70vh",
                  backgroundColor: "#ffffff",
                  color: "#0f172a",
                  borderRadius: "20px",
                  boxShadow: "0 18px 45px rgba(15, 23, 42, 0.16)",
                  padding: "22px 24px 24px",
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "18px",
                  border: "1px solid rgba(148, 163, 184, 0.18)",
                  overflowY: "auto",
                }}
              >
                {moreMenuColumns.map((column) => (
                  <div key={column.title}>
                    <div
                      style={{
                        fontSize: "11px",
                        fontWeight: "800",
                        textTransform: "uppercase",
                        letterSpacing: "0.16em",
                        color: "#0f172a",
                        paddingBottom: "8px",
                        marginBottom: "12px",
                        borderBottom: "1px solid #d7dee8",
                      }}
                    >
                      {column.title}
                    </div>

                    <div style={{ display: "grid", gap: "10px" }}>
                      {column.items.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => {
                            setMoreMenuOpen(false);
                            navigate(item.to);
                          }}
                          style={{
                            textAlign: "left",
                            border: "none",
                            background: "transparent",
                            padding: "0",
                            fontSize: "14px",
                            lineHeight: "1.35",
                            color: "#334155",
                            cursor: "pointer",
                            fontWeight: 500,
                          }}
                          onMouseEnter={(event) => {
                            event.currentTarget.style.color = primary;
                          }}
                          onMouseLeave={(event) => {
                            event.currentTarget.style.color = "#334155";
                          }}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {isMobile && (
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen((value) => !value)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "42px",
              height: "42px",
              borderRadius: "12px",
              border: "1px solid rgba(203, 213, 225, 0.25)",
              backgroundColor: "rgba(15, 23, 42, 0.35)",
              color: "white",
              flex: "0 0 auto",
            }}
          >
            {mobileMenuOpen ? <X style={{ width: "20px", height: "20px" }} /> : <Menu style={{ width: "20px", height: "20px" }} />}
          </button>
        )}

        <div style={{ ...searchWrapper, display: isMobile ? "none" : "block" }}>
          <Search
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#94a3b8",
              width: "16px",
              height: "16px",
            }}
          />
          <input
            type="text"
            placeholder="Search properties..."
            style={searchInputStyle}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && searchQuery.trim()) {
                navigate(
                  `/properties?search=${encodeURIComponent(searchQuery.trim())}`
                );
              }
            }}
          />
        </div>
      </div>

      {isMobile && mobileMenuOpen && (
        <div style={mobilePanelStyle}>
          <div style={searchWrapper}>
            <Search
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#94a3b8",
                width: "16px",
                height: "16px",
              }}
            />
            <input
              type="text"
              placeholder="Search properties..."
              style={{ ...searchInputStyle, width: "100%" }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && searchQuery.trim()) {
                  navigate(`/properties?search=${encodeURIComponent(searchQuery.trim())}`);
                  setMobileMenuOpen(false);
                }
              }}
            />
          </div>

          <div style={{ display: "grid", gap: "10px" }}>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <button
                type="button"
                style={{ ...mobileLinkStyle, flex: 1 }}
                onClick={() => {
                  navigate("/sales");
                  setMobileMenuOpen(false);
                }}
              >
                Sales
              </button>
              <button
                type="button"
                aria-label="Open sales dropdown"
                style={{
                  ...mobileLinkStyle,
                  width: "48px",
                  padding: "12px 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => setMobileSalesOpen((value) => !value)}
              >
                <ChevronDown style={{ width: "16px", height: "16px" }} />
              </button>
            </div>
            {mobileSalesOpen && (
              <div style={{ display: "grid", gap: "8px", paddingLeft: "8px" }}>
                {megaMenuColumns.flatMap((column) => column.items.slice(0, 4)).map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    style={mobileSubLinkStyle}
                    onClick={() => {
                      navigate(item.to);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}

            <div style={{ display: "flex", gap: "8px", alignItems: "center", order: navItemOrder.Rentals }}>
              <button
                type="button"
                style={{ ...mobileLinkStyle, flex: 1 }}
                onClick={() => {
                  navigate("/rentals");
                  setMobileMenuOpen(false);
                }}
              >
                Rentals
              </button>
              <button
                type="button"
                aria-label="Open rentals dropdown"
                style={{
                  ...mobileLinkStyle,
                  width: "48px",
                  padding: "12px 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => setMobileRentalsOpen((value) => !value)}
              >
                <ChevronDown style={{ width: "16px", height: "16px" }} />
              </button>
            </div>
            {mobileRentalsOpen && (
              <div style={{ display: "grid", gap: "8px", paddingLeft: "8px", order: navItemOrder.Rentals }}>
                {rentalsMenuColumns.flatMap((column) => column.items).map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    style={mobileSubLinkStyle}
                    onClick={() => {
                      navigate(item.to);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}

            <div style={{ display: "flex", gap: "8px", alignItems: "center", order: navItemOrder["Our Services"] }}>
            
              <button
                type="button"
                aria-label="Open our services dropdown"
                style={{
                  ...mobileLinkStyle,
                  width: "48px",
                  padding: "12px 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => setMobileOurServicesOpen((value) => !value)}
              >
                <ChevronDown style={{ width: "16px", height: "16px" }} />
              </button>
            </div>
            {mobileOurServicesOpen && (
              <div style={{ display: "grid", gap: "8px", paddingLeft: "8px", order: navItemOrder["Our Services"] }}>
                {ourServicesMenuColumns.flatMap((column) => column.items).map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    style={mobileSubLinkStyle}
                    onClick={() => {
                      navigate(item.to);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}

            <div style={{ display: "flex", gap: "8px", alignItems: "center", order: navItemOrder["Home Loans"] }}>
              <button
                type="button"
                style={{ ...mobileLinkStyle, flex: 1 }}
                onClick={() => {
                  navigate("/home-loans");
                  setMobileMenuOpen(false);
                }}
              >
                Home Loans
              </button>
              <button
                type="button"
                aria-label="Open home loans dropdown"
                style={{
                  ...mobileLinkStyle,
                  width: "48px",
                  padding: "12px 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => setMobileHomeLoansOpen((value) => !value)}
              >
                <ChevronDown style={{ width: "16px", height: "16px" }} />
              </button>
            </div>
            {mobileHomeLoansOpen && (
              <div style={{ display: "grid", gap: "10px", paddingLeft: "8px", order: navItemOrder["Home Loans"] }}>
                {homeLoansMenuItems.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    style={mobileSubLinkStyle}
                    onClick={() => {
                      navigate(item.to);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}

            <div style={{ display: "flex", gap: "8px", alignItems: "center", order: navItemOrder["Market Insights"] }}>
              <button
                type="button"
                style={{ ...mobileLinkStyle, flex: 1 }}
                onClick={() => {
                  navigate("/market-insights");
                  setMobileMenuOpen(false);
                }}
              >
                Market Insights
              </button>
              <button
                type="button"
                aria-label="Open market insights dropdown"
                style={{
                  ...mobileLinkStyle,
                  width: "48px",
                  padding: "12px 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => setMobileMarketInsightsOpen((value) => !value)}
              >
                <ChevronDown style={{ width: "16px", height: "16px" }} />
              </button>
            </div>
            {mobileMarketInsightsOpen && (
              <div style={{ display: "grid", gap: "8px", paddingLeft: "8px", order: navItemOrder["Market Insights"] }}>
                {marketInsightsMenuColumns.flatMap((column) => column.items).map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    style={mobileSubLinkStyle}
                    onClick={() => {
                      navigate(item.to);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}

            <div style={{ display: "flex", gap: "8px", alignItems: "center", order: navItemOrder["Wanted"] }}>
              <button
                type="button"
                style={{ ...mobileLinkStyle, flex: 1 }}
                onClick={() => {
                  navigate("/wanted");
                  setMobileMenuOpen(false);
                }}
              >
                Wanted
              </button>
              <button
                type="button"
                aria-label="Open wanted dropdown"
                style={{
                  ...mobileLinkStyle,
                  width: "48px",
                  padding: "12px 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => setMobileWantedOpen((value) => !value)}
              >
                <ChevronDown style={{ width: "16px", height: "16px" }} />
              </button>
            </div>
            {mobileWantedOpen && (
              <div style={{ display: "grid", gap: "10px", paddingLeft: "8px", order: navItemOrder["Wanted"] }}>
                {wantedMenuColumns.flatMap((column) => column.items).map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    style={mobileSubLinkStyle}
                    onClick={() => {
                      navigate(item.to);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}

            <div style={{ display: "flex", gap: "8px", alignItems: "center", order: navItemOrder["Find Agent"] }}>
              <button
                type="button"
                style={{ ...mobileLinkStyle, flex: 1 }}
                onClick={() => {
                  navigate("/find-agent");
                  setMobileMenuOpen(false);
                }}
              >
                Find Agent
              </button>
              <button
                type="button"
                aria-label="Open find agent dropdown"
                style={{
                  ...mobileLinkStyle,
                  width: "48px",
                  padding: "12px 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => setMobileAgentOpen((value) => !value)}
              >
                <ChevronDown style={{ width: "16px", height: "16px" }} />
              </button>
            </div>
            {mobileAgentOpen && (
              <div style={{ display: "grid", gap: "8px", paddingLeft: "8px", order: navItemOrder["Find Agent"] }}>
                {agentMenuItems.flatMap((column) => column.items).map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    style={mobileSubLinkStyle}
                    onClick={() => {
                      navigate(item.to);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}

            <div style={{ display: "flex", gap: "8px", alignItems: "center", order: navItemOrder["More"] }}>
              <button
                type="button"
                style={{ ...mobileLinkStyle, flex: 1 }}
                onClick={() => {
                  navigate("/more");
                  setMobileMenuOpen(false);
                }}
              >
                More
              </button>
              <button
                type="button"
                aria-label="Open more dropdown"
                style={{
                  ...mobileLinkStyle,
                  width: "48px",
                  padding: "12px 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => setMobileMoreOpen((value) => !value)}
              >
                <ChevronDown style={{ width: "16px", height: "16px" }} />
              </button>
            </div>
            {mobileMoreOpen && (
              <div style={{ display: "grid", gap: "8px", paddingLeft: "8px", order: navItemOrder["More"] }}>
                {moreMenuColumns.flatMap((column) => column.items).map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    style={mobileSubLinkStyle}
                    onClick={() => {
                      navigate(item.to);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}

            {topLinks.map((item) => (
              item.label === "Find Agent" || item.label === "Market Insights" ? null : (
                <button
                  key={item.label}
                  type="button"
                  style={{ ...mobileLinkStyle, order: navItemOrder[item.label] }}
                  onClick={() => {
                    navigate(item.to);
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </button>
              )
            ))}

            <div style={{ display: "grid", gap: "10px", gridTemplateColumns: "1fr 1fr" }}>
              <button type="button" style={loginStyle} onClick={() => { navigate("/login"); setMobileMenuOpen(false); }}>
                Login
              </button>
              {currentUser ? (
                <button
                  type="button"
                  style={{
                    ...registerStyle,
                    border: '1px solid rgba(255,255,255,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    backgroundColor: 'rgba(255,255,255,0.14)',
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <button type="button" style={registerStyle} onClick={() => { navigate("/register"); setMobileMenuOpen(false); }}>
                  Register
                </button>
              )}
            </div>

            <div style={{ display: 'grid', gap: 8 }}>
              <button type="button" style={mobileLinkStyle} onClick={() => { navigate('/help'); setMobileMenuOpen(false); }}>
                Help
              </button>
              <button type="button" style={mobileLinkStyle} onClick={() => { handlePostAdClick(); setMobileMenuOpen(false); }}>
                Post Your Ad
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}




export default Navbar;

