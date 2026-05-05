import { useState } from "react";
import { Search, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const primary = "#2171B5";
  const dark = "#08306B";

  const navStyle = {
    position: "sticky",
    top: 0,
    zIndex: 50,
    backgroundColor: dark,
    borderBottom: `1px solid ${primary}`,
    color: "white",
  };

  const containerStyle = {
    width: "100%",
    margin: "0 auto",
    padding: "0 70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "80px",
    gap: "24px",
  };

  const logoStyle = {
    fontWeight: "bold",
    fontSize: "24px",
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer",
    marginRight: "15px",
  };

  const brandStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flexShrink: 0,
  };

  const logoIconWrapper = {
    backgroundColor: primary,
    padding: "6px",
    borderRadius: "50%",
    marginRight: "8px",
  };

  const menuStyle = {
    display: "flex",
    alignItems: "center",
    gap: "28px",
    flex: 1,
    justifyContent: "center",
    minWidth: 0,
  };

  const menuItemStyle = {
    cursor: "pointer",
    fontSize: "16px",
    color: "#cbd5e1",
    transition: "0.3s",
  };

  const searchWrapper = { position: "relative" };

  const searchInputStyle = {
    padding: "8px 12px 8px 36px",
    borderRadius: "999px",
    border: `1px solid ${primary}`,
    backgroundColor: "#0b2a4a",
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
    color: "white",
    border: "1px solid #cbd5e1",
  };

 const postAdStyle = {
   ...buttonStyle,
   backgroundColor: "#2171B5",
   color: "white",
 };

  const authStyle = {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    flexShrink: 0,
  };



  return (
    <nav style={navStyle}>
      <div style={containerStyle}>

        {/* Logo */}
        <div style={brandStyle} onClick={() => navigate("/")}>
          <div style={logoStyle}>
            <div style={logoIconWrapper}>
              <Home style={{ height: "24px", width: "24px", color: "white" }} />
            </div>
            <span>
              LankaProperty<span style={{ color: primary }}>Web</span>
            </span>
          </div>

          {/* Sales button removed as requested */}
        </div>

        {/* Menu */}
        <div style={menuStyle}>
          
          <span style={menuItemStyle} onClick={() => navigate("/rentals")}> 
            Rentals
          </span>

          <span style={menuItemStyle} onClick={() => navigate("/kandy") }>
            Kandy Area
          </span>

          <span style={menuItemStyle} onClick={() => navigate("/sales") }>
            Sales
          </span>

          <span style={menuItemStyle} onClick={() => navigate("/contact")}>
            Apartment Finder
          </span>

          <span style={menuItemStyle} onClick={() => navigate("/home-loans")}>
            Home Loans
          </span>
        </div>



        {/* Search */}
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

        {/* Auth Buttons */}
        <div style={authStyle}>

          <button
            style={loginStyle}
            onClick={() => navigate("/login")}
          >
            Login
          </button>

          {/* <button
            style={registerStyle}
            onClick={() => navigate("/register")}
          >
            Register
          </button> */}

          <button
            style={postAdStyle}
            onClick={() => navigate("/post-ad")}
          >
            Post Your Ad
          </button>

        </div>

      </div>
    </nav>
  );
}