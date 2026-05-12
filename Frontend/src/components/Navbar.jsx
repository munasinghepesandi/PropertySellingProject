import React, { useEffect, useMemo, useState } from "react";
import { Search, Home, ChevronDown, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

  const primary = "#2171B5";
  const dark = "#08306B";

  const navStyle = {
    position: "sticky",
    top: 0,
    zIndex: 50,
    backgroundColor: "#ffffff",
    color: "white",
  };

  const topBarStyle = {
    backgroundColor: "white",
    color: "#0f172a",
    borderBottom: "1px solid #e2e8f0",
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
    color: "#0f172a",
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
    color: "#0f172a",
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
            <button type="button" style={topLinkStyle} onClick={() => navigate("/login")}>
              Login
            </button>
            <button type="button" style={topLinkStyle} onClick={() => navigate("/register")}>
              Register
            </button>
            <button type="button" style={topLinkStyle} onClick={() => navigate("/help")}>
              Help
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
        {/* Desktop Menu */}
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
                  minWidth: "1080px",
                  backgroundColor: "#ffffff",
                  color: "#0f172a",
                  borderRadius: "20px",
                  boxShadow: "0 18px 45px rgba(15, 23, 42, 0.16)",
                  padding: "22px 24px 24px",
                  display: "grid",
                  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                  gap: "22px",
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
            <button
              type="button"
              style={{ ...menuLinkStyle, fontSize: "15px" }}
              onClick={() => {
                setOurServicesMenuOpen(false);
                navigate("/our-services");
              }}
            >
              Our Services
            </button>

            {ourServicesMenuOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  minWidth: "820px",
                  backgroundColor: "#ffffff",
                  color: "#0f172a",
                  borderRadius: "20px",
                  boxShadow: "0 18px 45px rgba(15, 23, 42, 0.16)",
                  padding: "22px 24px 24px",
                  display: "grid",
                  gridTemplateColumns: "1.2fr 1.2fr 0.8fr",
                  gap: "22px",
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
            <button
              type="button"
              style={{ ...menuLinkStyle, fontSize: "15px" }}
              onClick={() => {
                setHomeLoansMenuOpen(false);
                navigate("/home-loans");
              }}
            >
              Home Loans
            </button>

            {homeLoansMenuOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  width: "360px",
                  backgroundColor: "#ffffff",
                  color: "#0f172a",
                  borderRadius: "18px",
                  boxShadow: "0 18px 45px rgba(15, 23, 42, 0.16)",
                  padding: "16px",
                  display: "grid",
                  gap: "10px",
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
                      padding: "10px 12px",
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
                    <span style={{ display: "block", fontSize: "14px", fontWeight: 800 }}>{item.label}</span>
                    <span style={{ display: "block", marginTop: "4px", fontSize: "12px", lineHeight: 1.4, color: "#64748b" }}>
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
                  minWidth: "760px",
                  backgroundColor: "#ffffff",
                  color: "#0f172a",
                  borderRadius: "20px",
                  boxShadow: "0 18px 45px rgba(15, 23, 42, 0.16)",
                  padding: "22px 24px 24px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "22px",
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
                  minWidth: "760px",
                  backgroundColor: "#ffffff",
                  color: "#0f172a",
                  borderRadius: "20px",
                  boxShadow: "0 18px 45px rgba(15, 23, 42, 0.16)",
                  padding: "22px 24px 24px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "22px",
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

          {topLinks.map((item) => (
            <button
              key={item.label}
              type="button"
              style={{ ...desktopLinkStyle, order: navItemOrder[item.label] }}
              onClick={() => navigate(item.to)}
            >
              {item.label}
              {item.badge ? (
                <span style={{ marginLeft: "6px", backgroundColor: "#d9e8f6", color: "#08306B", borderRadius: "999px", padding: "2px 8px", fontSize: "10px", fontWeight: 700 }}>
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



        {/* Search */}
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

        {/* Auth Buttons moved to top bar */}

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

          <div style={{ display: "flex", gap: "8px", alignItems: "center", order: navItemOrder["Our Services"] }}>
            <button
              type="button"
              style={{ ...mobileLinkStyle, flex: 1 }}
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
            <div style={{ display: "grid", gap: "8px", paddingLeft: "8px", order: navItemOrder["Home Loans"] }}>
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
            <button type="button" style={registerStyle} onClick={() => { navigate("/register"); setMobileMenuOpen(false); }}>
              Register
            </button>
          </div>

          <button type="button" style={mobileLinkStyle} onClick={() => { navigate("/help"); setMobileMenuOpen(false); }}>
            Help
          </button>
        </div>
        </div>
      )}
    </nav>
  );
}
