import { useEffect, useMemo, useState } from "react";
import { Search, Home, ChevronDown, Menu, X, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [salesMenuOpen, setSalesMenuOpen] = useState(false);
  const [ourServicesMenuOpen, setOurServicesMenuOpen] = useState(false);
  const [homeLoansMenuOpen, setHomeLoansMenuOpen] = useState(false);
  const [marketInsightsMenuOpen, setMarketInsightsMenuOpen] = useState(false);
  const [agentMenuOpen, setAgentMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSalesOpen, setMobileSalesOpen] = useState(false);
  const [mobileOurServicesOpen, setMobileOurServicesOpen] = useState(false);
  const [mobileHomeLoansOpen, setMobileHomeLoansOpen] = useState(false);
  const [mobileMarketInsightsOpen, setMobileMarketInsightsOpen] = useState(false);
  const [mobileAgentOpen, setMobileAgentOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const updateViewport = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);

    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const topLinks = [
    { label: "Rentals", to: "/rentals" },
    { label: "Land", to: "/land" },
    { label: "Apartment Finder", to: "/contact", badge: "New" },
    { label: "Invest", to: "/invest" },
    { label: "Wanted", to: "/wanted" },
    { label: "More", to: "/more" },
  ];

  const navItemOrder = {
    Rentals: 1,
    Land: 2,
    "Apartment Finder": 3,
    "Our Services": 4,
    Invest: 5,
    "Home Loans": 6,
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
          { label: "Luxury Apartments", to: "/sales/luxury-apartments" },
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
          { label: "Sri Lanka Land Price Index", to: "/sales/land-price-index" },
          { label: "Guide for foreigners buying property", to: "/features/property-buying-for-foreigners.php" },
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
          { label: "Sri Lanka Land Price Index", to: "/sales/land-price-index" },
          { label: "Membership Benefits", to: "/our-services" },
          { label: "Market Outlook Report", to: "/market-insights" },
          { label: "News & Guides", to: "/more" },
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
              { label: "Letting Agents", to: "/rentals" },
              { label: "Commercial property agents", to: "/commercial" },
              { label: "Land Sales", to: "/land" },
            ],
          },
    ],
    []
  );


  return (
    <nav className="navbar">
      {/* Top Bar */}
      <div className="navbar-top-bar">
        <div className="navbar-top-inner">
          <div className="navbar-brand" onClick={() => navigate("/")}> 
            <div className="navbar-brand-icon">
              <Home />
            </div>
            <span>
              LankaProperty<span className="navbar-brand-accent">Web</span>
            </span>
          </div>

          <div className="navbar-top-actions">
            <button type="button" className="navbar-top-link" onClick={() => navigate("/login")}>
              Login
            </button>
            <button type="button" className="navbar-top-link" onClick={() => navigate("/register")}>
              Register
            </button>
            <button type="button" className="navbar-top-link" onClick={() => navigate("/help")}>
              Help
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="navbar-main">
        <div className="navbar-container">
        {/* Desktop Menu */}
        <div className="navbar-desktop-menu">
          <div style={{ position: "relative" }}
            onMouseEnter={() => setSalesMenuOpen(true)}
            onMouseLeave={() => setSalesMenuOpen(false)}
          >
            <button
              type="button"
              className="navbar-menu-item"
              onClick={() => {
                setSalesMenuOpen(false);
                navigate("/sales");
              }}
            >
              Sales
            </button>

            {salesMenuOpen && (
              <div className="navbar-mega-menu menu-4-col">
                {megaMenuColumns.map((column) => (
                  <div key={column.title} className="navbar-mega-menu-column">
                    <div className="navbar-mega-menu-title">
                      {column.title}
                    </div>

                    <div className="navbar-mega-menu-items">
                      {column.items.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          className="navbar-mega-menu-link"
                          onClick={() => {
                            setSalesMenuOpen(false);
                            navigate(item.to);
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
            <button
              type="button"
              className="navbar-menu-item"
              onClick={() => {
                setOurServicesMenuOpen(false);
                navigate("/our-services");
              }}
            >
              Our Services
            </button>

            {ourServicesMenuOpen && (
              <div className="navbar-mega-menu menu-3-col">
                {ourServicesMenuColumns.map((column) => (
                  <div key={column.title} className="navbar-mega-menu-column">
                    <div className="navbar-mega-menu-title">
                      {column.title}
                    </div>

                    <div className="navbar-mega-menu-items">
                      {column.items.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          className="navbar-mega-menu-link"
                          onClick={() => {
                            setOurServicesMenuOpen(false);
                            navigate(item.to);
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
            <button
              type="button"
              className="navbar-menu-item"
              onClick={() => {
                setHomeLoansMenuOpen(false);
                navigate("/home-loans");
              }}
            >
              Home Loans
            </button>

            {homeLoansMenuOpen && (
              <div className="navbar-home-loans-menu">
                {homeLoansMenuItems.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    className="navbar-home-loans-item"
                    onClick={() => {
                      setHomeLoansMenuOpen(false);
                      navigate(item.to);
                    }}
                  >
                    <span className="navbar-home-loans-item-title">{item.label}</span>
                    <span className="navbar-home-loans-item-desc">
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
              className="navbar-menu-item"
              onClick={() => {
                setMarketInsightsMenuOpen(false);
                navigate("/market-insights");
              }}
            >
              Market Insights
            </button>

            {marketInsightsMenuOpen && (
              <div className="navbar-mega-menu menu-2-col">
                {marketInsightsMenuColumns.map((column) => (
                  <div key={column.title} className="navbar-mega-menu-column">
                    <div className="navbar-mega-menu-title">
                      {column.title}
                    </div>

                    <div className="navbar-mega-menu-items">
                      {column.items.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          className="navbar-mega-menu-link"
                          onClick={() => {
                            setMarketInsightsMenuOpen(false);
                            navigate(item.to);
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
              className="navbar-menu-item"
              onClick={() => {
                setAgentMenuOpen(false);
                navigate("/find-agent");
              }}
            >
              Find Agent
            </button>

            {agentMenuOpen && (
              <div className="navbar-mega-menu menu-2-col">
                {agentMenuItems.map((column) => (
                  <div key={column.title} className="navbar-mega-menu-column">
                    <div className="navbar-mega-menu-title">
                      {column.title}
                    </div>

                    <div className="navbar-mega-menu-items">
                      {column.items.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          className="navbar-mega-menu-link"
                          onClick={() => {
                            setAgentMenuOpen(false);
                            navigate(item.to);
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

          {topLinks.map((item) => (
            <button
              key={item.label}
              type="button"
              className="navbar-menu-item"
              style={{ order: navItemOrder[item.label] }}
              onClick={() => navigate(item.to)}
            >
              {item.label}
              {item.badge ? (
                <span className="navbar-badge">
                  {item.badge}
                </span>
              ) : null}
            </button>
          ))}
        </div>

        {isMobile && (
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="navbar-mobile-toggle"
            onClick={() => setMobileMenuOpen((value) => !value)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        )}

        {/* Search & Post Ad */}
        {!isMobile && (
          <>
            <div className="navbar-search-wrapper">
              <Search className="navbar-search-icon" />
              <input
                type="text"
                placeholder="Search properties..."
                className="navbar-search-input"
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

            <button
              type="button"
              className="navbar-post-ad-btn"
              onClick={() => navigate("/post-ad")}
            >
              <Plus />
              Post Ad
            </button>
          </>
        )}

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobile && mobileMenuOpen && (
        <div className="navbar-mobile-panel active">
          <div className="navbar-search-wrapper">
            <Search className="navbar-search-icon" />
            <input
              type="text"
              placeholder="Search properties..."
              className="navbar-search-input"
              style={{ width: "100%" }}
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
                className="navbar-mobile-link"
                style={{ flex: 1 }}
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
                className="navbar-mobile-link"
                style={{
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
                    className="navbar-mobile-sublink"
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
                className="navbar-mobile-link"
                style={{ flex: 1 }}
                onClick={() => {
                  navigate("/our-services");
                  setMobileMenuOpen(false);
                }}
              >
                Our Services
              </button>
              <button
                type="button"
                aria-label="Open our services dropdown"
                className="navbar-mobile-link"
                style={{
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
                    className="navbar-mobile-sublink"
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
                className="navbar-mobile-link"
                style={{ flex: 1 }}
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
                className="navbar-mobile-link"
                style={{
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
              <div style={{ display: "grid", gap: "8px", paddingLeft: "8px", order: navItemOrder["Home Loans"] }}>
                {homeLoansMenuItems.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    className="navbar-mobile-sublink"
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
                className="navbar-mobile-link"
                style={{ flex: 1 }}
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
                className="navbar-mobile-link"
                style={{
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
                    className="navbar-mobile-sublink"
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
                className="navbar-mobile-link"
                style={{ flex: 1 }}
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
                className="navbar-mobile-link"
                style={{
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
                    className="navbar-mobile-sublink"
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
                className="navbar-mobile-link"
                style={{ order: navItemOrder[item.label] }}
                onClick={() => {
                  navigate(item.to);
                  setMobileMenuOpen(false);
                }}
              >
                {item.label}
              </button>
              )
            ))}

            <button
              type="button"
              className="navbar-post-ad-btn"
              style={{ width: "100%" }}
              onClick={() => { 
                navigate("/post-ad"); 
                setMobileMenuOpen(false); 
              }}
            >
              <Plus style={{ width: "16px", height: "16px" }} />
              Post Ad
            </button>

            <div style={{ display: "grid", gap: "10px", gridTemplateColumns: "1fr 1fr" }}>
              <button type="button" className="navbar-login-btn" onClick={() => { navigate("/login"); setMobileMenuOpen(false); }}>
                Login
              </button>
              <button type="button" className="navbar-register-btn" onClick={() => { navigate("/register"); setMobileMenuOpen(false); }}>
                Register
              </button>
            </div>

            <button type="button" className="navbar-mobile-link" onClick={() => { navigate("/help"); setMobileMenuOpen(false); }}>
              Help
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
