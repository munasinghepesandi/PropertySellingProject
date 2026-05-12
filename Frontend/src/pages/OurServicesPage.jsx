import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import BusinessAdvisoryPage from "./BusinessAdvisoryPage";
import ForeignersGuidePage from "./ForeignersGuidePage";
import SolarPanelsPage from "./SolarPanelsPage";
import MarketInsightsPage from "./MarketInsightsPage";
import {
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  BriefcaseBusiness,
  Calculator,
  CalendarDays,
  ClipboardList,
  Download,
  FileText,
  Handshake,
  Home,
  Landmark,
  MapPin,
  Phone,
  Scale,
  Search,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const buyerSellerServices = [
  {
    eyebrow: "Service",
    title: "Property Valuations",
    icon: Calculator,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80&auto=format&fit=crop",
    description:
      "Need to get your property valued? We will find certified valuers in your area who will come and do the valuation for you.",
    heading: "Valuation services that we offer",
    items: [
      "Value your property for sale",
      "Valuation of property for buyers",
      "Obtain valuation reports for Visa or loans",
      "We offer island wide valuations",
      "Valuations carried out by certified valuers",
    ],
  },
  {
    eyebrow: "Legal",
    title: "Legal Assistance",
    icon: Scale,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=80&auto=format&fit=crop",
    description:
      "Our panel of reputable and experienced attorneys will provide legal advice, draft documents and advise on the best ways to keep your documents safe from fraud.",
    heading: "Legal assistance that we offer",
    items: [
      "Checking & preparing of your Deeds",
      "Preparing Tenancy Agreements",
      "Check the validity of the condo or the land that you are buying",
      "Advice on your eligibility and requirements",
      "Advice to foreigners on how to buy property",
      "Advice on CGT and other taxes",
    ],
  },
  {
    eyebrow: "Document",
    title: "Document preparation & submission",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80&auto=format&fit=crop",
    description:
      "We will get all your documentation related to the property drafted by reputable attorneys and take care of submitting them to the relevant authorities.",
    heading: "Document services that we offer",
    items: [
      "Preparing of your Deeds & Tenancy Agreements",
      "Validating the existing documents at Land Registry",
      "Checking the seller's documents, Deeds, COCs and making sure there are no encumbrances",
      "Submit your documents to the Land Registry",
      "Advice to foreigners on how to buy property",
      "Advice on how to protect your deeds and documents to protect against fraud",
    ],
  },
  {
    eyebrow: "Advice",
    title: "Mortgage Advice",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80&auto=format&fit=crop",
    description:
      "Looking to get a home loan? We'll help you find the best deals, prepare the documents that the bank will need and submit them to the bank on your behalf.",
    heading: "Mortgage assistance that we offer",
    items: [
      "Check your requirements & advice you on bank's requirements",
      "Do an initial assessment of your eligibility",
      "Advice you on the best rates & offers available from our partner banks",
      "Get the necessary documents prepared",
      "Help you fill in the application forms",
      "Submit your documents to the bank",
      "Follow up with the bank on your application",
    ],
  },
  {
    eyebrow: "Fees",
    title: "Fees & taxes payment",
    icon: BadgeDollarSign,
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=900&q=80&auto=format&fit=crop",
    description:
      "We'll take care of your stamp duty and municipality payments, so you won't need to waste your time going to multiple government institutions.",
    heading: "Fees & Taxes Payment That We Offer",
    items: [
      "Calculate and pay your stamp duty",
      "Calculate and pay your Municipality / Urban Council fees",
      "Calculate and pay your Capital Gains Tax, if any",
    ],
  },
  {
    eyebrow: "Assistance",
    title: "Personal Assistance",
    icon: Handshake,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&q=80&auto=format&fit=crop",
    description:
      "You will get a personal assistant to help you through the whole process, while keeping you updated on the status.",
    heading: "Personal services that we offer",
    items: [
      "You will get a dedicated assistant to help you till the end of the process",
      "You will be kept updated on the status at each stage",
      "Personalise the requirements for your needs",
      "Contact through phone, email or chat and ask any questions that you have",
    ],
  },
];

const otherServices = [
  {
    title: "Moving Services",
    image: "https://images.unsplash.com/photo-1600518464441-9306b3b4f3aa?w=1200&q=80&auto=format&fit=crop",
    description:
      "Talk to us to hire professional movers who will package and move your items safely and securely from one location to another.",
    link: "/our-services",
  },
  {
    title: "Solar Panels",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80&auto=format&fit=crop",
    description:
      "Go green with solar services - compare solar panel systems, trusted installers, and provider options for your home or business.",
    link: "/our-services/solar-panels",
  },
  {
    title: "Insurance",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80&auto=format&fit=crop",
    description:
      "Get the worry off your mind about mortgage repayments and household contents with insurance cover.",
  },
  {
    title: "Photography",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900&q=80&auto=format&fit=crop",
    description:
      "Get a professional photographer to capture your property and showcase its uniqueness.",
  },
];

const marketServices = [
  "Field based market research",
  "Online based market research",
  "Market analysis reports",
  "Feasibility Study reports",
  "Investment advisory",
  "Demand and pricing analysis",
  "Real Estate demand for a particular area",
  "Reports based on website and market data",
];

const advisoryStats = [
  { label: "Market trend", value: "Rising", note: "Demand stays active in key metro areas" },
  { label: "Price outlook", value: "Stable", note: "Buyer interest remains steady for well-located homes" },
  { label: "Investor focus", value: "High", note: "Apartments and land continue to draw attention" },
];

const reportPoints = [
  "Updated Sri Lanka property trend overview",
  "Pricing signals for buyers, sellers, and investors",
  "High-demand areas, rental demand, and growth pockets",
  "Practical insight for planning your next move",
];

const advisoryHighlights = [
  "Estimate your potential ROI before you invest",
  "Find the best locations to settle in",
  "Evaluate how your price quotation compares",
];

const housePriceRows = [
  ["Sri Lanka Overall House Sale price", "85.12 million", "25.0%"],
  ["Sri Lanka Overall Apartment Sale price", "93.63 million", "15.20%"],
];

const landPriceRows = [
  ["Sri Lanka Overall Residential Land price", "3.60 million Per perch", "72%"],
  ["Colombo 1-15 Residential Land price", "14.63 million Per perch", "13%"],
  ["Western Province (apart from Colombo city) Residential Land price", "2.42 million Per perch", "70%"],
  ["Sri Lanka Overall Tea Land price", "5.81 million Per acre", "13%"],
  ["Sri Lanka Overall Coconut Land price", "8.05 million Per acre", "1%"],
];

const latestNews = [
  {
    date: "Monday April 06, 2026",
    title: "Robust Demand for Real Estate Purchases Displayed at the Lanka Property Show 2026",
    excerpt:
      "From left to right: Mr. Kishore Reddy, President, Indian CEO Forum; Mr. Virath De Alwis, Chairman,...",
  },
  {
    date: "Wednesday March 18, 2026",
    title: "Capitalizing on the Real Estate Expansion: Lanka Property Show 2026 Sets the Stage for Sri Lanka’s Next Era of Growth",
    excerpt:
      "The Lanka Property Show 2026, Sri Lanka’s flagship real estate exhibition, is set to return for...",
  },
  {
    date: "Thursday February 26, 2026",
    title: "LankaPropertyWeb Unveils ‘Apartment Finder’: A Game-Changer in the Real Estate Market",
    excerpt:
      "Colombo, Sri Lanka – LankaPropertyWeb (LPW) is redefining the property search experience with the...",
  },
  {
    date: "Tuesday April 07, 2026",
    title: "The Smart Investor’s Guide to Below Market Value Properties in Sri Lanka",
    excerpt:
      "Buying property in Sri Lanka has long been viewed as a reliable investment, but finding real value...",
  },
];

export const inspirationCategories = [
  "All",
  "Living Room",
  "Bathroom",
  "Bedroom",
  "Dining Room",
  "Exterior",
  "Garden",
  "Kitchen",
  "Luxury",
];

export const inspirationItems = [
  { title: "Tri-Zen 02 Bedroom Apartment For Rent In Colombo 02", tag: "Living Room", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80&auto=format&fit=crop" },
  { title: "Prime Apartment Complex For Sale In Colombo 07", tag: "Exterior", image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200&q=80&auto=format&fit=crop" },
  { title: "1 Bedroom Apartment For Sale In Colombo 02", tag: "Bathroom", image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1200&q=80&auto=format&fit=crop" },
  { title: "Luxe Furnished Apartment For Rent In Kottawa", tag: "Bedroom", image: "https://images.unsplash.com/photo-1616594039964-3de5bd33685d?w=1200&q=80&auto=format&fit=crop" },
  { title: "Modern Kitchen Design Ideas For City Homes", tag: "Kitchen", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80&auto=format&fit=crop" },
  { title: "Pool-side Exterior Concept For Tropical Villas", tag: "Exterior", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop" },
  { title: "Compact Dining Room Inspiration For Apartments", tag: "Dining Room", image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200&q=80&auto=format&fit=crop" },
  { title: "Green Garden Corner With Natural Stone Pathways", tag: "Garden", image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1200&q=80&auto=format&fit=crop" },
  { title: "Minimal Living Room With Warm Tones", tag: "Living Room", image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=1200&q=80&auto=format&fit=crop" },
  { title: "Open Kitchen With Island Counter", tag: "Kitchen", image: "https://images.unsplash.com/photo-1600586753151-384129cf4e3e?w=1200&q=80&auto=format&fit=crop" },
  { title: "Master Bedroom With Wood Accent Wall", tag: "Bedroom", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80&auto=format&fit=crop" },
  { title: "Contemporary Bathroom With Glass Shower", tag: "Bathroom", image: "https://images.unsplash.com/photo-1616593969747-4797dc75033e?w=1200&q=80&auto=format&fit=crop" },
  { title: "Dining Space With Pendant Lighting", tag: "Dining Room", image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?w=1200&q=80&auto=format&fit=crop" },
  { title: "Front Elevation For Urban Family Home", tag: "Exterior", image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200&q=80&auto=format&fit=crop" },
  { title: "Garden Deck With Tropical Planting", tag: "Garden", image: "https://images.unsplash.com/photo-1518156677180-95a2893f3499?w=1200&q=80&auto=format&fit=crop" },
  { title: "Luxury Penthouse Living Hall", tag: "Luxury", image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80&auto=format&fit=crop" },
  { title: "Neutral Living Room With Art Wall", tag: "Living Room", image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200&q=80&auto=format&fit=crop" },
  { title: "Monochrome Kitchen With Premium Finishes", tag: "Kitchen", image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=1200&q=80&auto=format&fit=crop" },
  { title: "Guest Bedroom With Balcony Access", tag: "Bedroom", image: "https://images.unsplash.com/photo-1617104551722-3b2d51366458?w=1200&q=80&auto=format&fit=crop" },
  { title: "Small Bathroom Layout Ideas", tag: "Bathroom", image: "https://images.unsplash.com/photo-1564540574859-0dfb63985939?w=1200&q=80&auto=format&fit=crop" },
  { title: "Dining Nook For Compact Apartments", tag: "Dining Room", image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=1200&q=80&auto=format&fit=crop" },
  { title: "Duplex Exterior With Vertical Fins", tag: "Exterior", image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200&q=80&auto=format&fit=crop" },
  { title: "Backyard Seating With Night Lights", tag: "Garden", image: "https://images.unsplash.com/photo-1472224371017-08207f84aaae?w=1200&q=80&auto=format&fit=crop" },
  { title: "Luxury Villa Lounge Interior", tag: "Luxury", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80&auto=format&fit=crop" },
  { title: "Cozy Living Room For First Home Buyers", tag: "Living Room", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80&auto=format&fit=crop" },
  { title: "Scandinavian Kitchen Style", tag: "Kitchen", image: "https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=1200&q=80&auto=format&fit=crop" },
  { title: "Bedroom Storage Design For Small Spaces", tag: "Bedroom", image: "https://images.unsplash.com/photo-1617104551722-3b2d51366458?w=1200&q=80&auto=format&fit=crop" },
  { title: "Spa-style Bathroom With Stone Texture", tag: "Bathroom", image: "https://images.unsplash.com/photo-1616593969747-4797dc75033e?w=1200&q=80&auto=format&fit=crop" },
  { title: "Elegant Dining Area For Family Gatherings", tag: "Dining Room", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200&q=80&auto=format&fit=crop" },
  { title: "Modern Facade With Glass Balcony", tag: "Exterior", image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1200&q=80&auto=format&fit=crop" },
  { title: "Courtyard Garden For Villa Homes", tag: "Garden", image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=1200&q=80&auto=format&fit=crop" },
  { title: "Luxury Master Suite With Lounge", tag: "Luxury", image: "https://images.unsplash.com/photo-1600607687644-c7f34f8d9d9f?w=1200&q=80&auto=format&fit=crop" },
  { title: "TV Feature Wall Living Room Trends", tag: "Living Room", image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=1200&q=80&auto=format&fit=crop" },
  { title: "Kitchen Storage Ideas For Apartments", tag: "Kitchen", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80&auto=format&fit=crop" },
  { title: "Premium Bedroom Lighting Concepts", tag: "Bedroom", image: "https://images.unsplash.com/photo-1616593969747-4797dc75033e?w=1200&q=80&auto=format&fit=crop" },
  { title: "Compact Bathroom Vanity Designs", tag: "Bathroom", image: "https://images.unsplash.com/photo-1629079447777-1e605162dc8d?w=1200&q=80&auto=format&fit=crop" },
  { title: "Dining Layout For Open Plan Homes", tag: "Dining Room", image: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?w=1200&q=80&auto=format&fit=crop" },
  { title: "Luxury Residence Entrance Design", tag: "Exterior", image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80&auto=format&fit=crop" },
  { title: "Terrace Garden For Urban Living", tag: "Garden", image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1200&q=80&auto=format&fit=crop" },
  { title: "High-end Living And Dining Combo", tag: "Luxury", image: "https://images.unsplash.com/photo-1617098474202-0d0d7f60a9d7?w=1200&q=80&auto=format&fit=crop" },
  { title: "Family Living Room With Natural Light", tag: "Living Room", image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=1200&q=80&auto=format&fit=crop" },
  { title: "Two-tone Kitchen Cabinet Inspiration", tag: "Kitchen", image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1200&q=80&auto=format&fit=crop" },
  { title: "Soft-tone Bedroom With Timber Flooring", tag: "Bedroom", image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200&q=80&auto=format&fit=crop" },
  { title: "Minimal Bathroom For Studio Apartments", tag: "Bathroom", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80&auto=format&fit=crop" },
  { title: "Classic Dining Room With Wooden Table", tag: "Dining Room", image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200&q=80&auto=format&fit=crop" },
  { title: "Contemporary Exterior With Clean Lines", tag: "Exterior", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80&auto=format&fit=crop" },
  { title: "Landscape Garden Around Pool", tag: "Garden", image: "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?w=1200&q=80&auto=format&fit=crop" },
  { title: "Luxury Penthouse Bedroom View", tag: "Luxury", image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80&auto=format&fit=crop" },
  { title: "Modern Living Room Ceiling Design", tag: "Living Room", image: "https://images.unsplash.com/photo-1560185127-6a8c7f6f5f0b?w=1200&q=80&auto=format&fit=crop" },
  { title: "Kitchen Backsplash And Island Concepts", tag: "Kitchen", image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200&q=80&auto=format&fit=crop" },
  { title: "Kids Bedroom Interior Inspiration", tag: "Bedroom", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80&auto=format&fit=crop" },
  { title: "Marble Bathroom With Gold Fixtures", tag: "Bathroom", image: "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?w=1200&q=80&auto=format&fit=crop" },
  { title: "Dining Room Styling With Green Accents", tag: "Dining Room", image: "https://images.unsplash.com/photo-1600488994023-6f4748e66f96?w=1200&q=80&auto=format&fit=crop" },
  { title: "Luxury Courtyard And Facade Lighting", tag: "Luxury", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80&auto=format&fit=crop" },
];

function AdvisoryPage() {
  const [activeInspirationCategory, setActiveInspirationCategory] = React.useState("All");
  const visibleInspirationItems =
    activeInspirationCategory === "All"
      ? inspirationItems
      : inspirationItems.filter((item) => item.tag === activeInspirationCategory);

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900">
      <Navbar />

      <section className="mx-auto w-full max-w-7xl px-5 pb-14 pt-8 md:px-8">
        <div className="bg-white px-1 py-2 md:px-2">
          <div className="flex gap-3 overflow-x-auto pb-3">
            {inspirationCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveInspirationCategory(category)}
                className={`whitespace-nowrap rounded-full border px-6 py-2 text-sm font-bold transition ${
                  activeInspirationCategory === category
                    ? "border-[#2171B5] bg-[#2171B5] text-white"
                    : "border-[#2171B5] bg-white text-[#2171B5] hover:bg-[#eff6fd]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <p className="mt-4 text-sm font-semibold text-slate-600">Home &gt; Inspiration</p>
          <h2 className="mt-3 text-2xl font-black tracking-[-0.02em] text-slate-900 md:text-4xl">
            70053 Home Inspiration &amp; ideas in Sri Lanka
          </h2>
          <p className="mt-2 text-sm text-slate-500">Showing {visibleInspirationItems.length} filtered results</p>

          <div className="mt-8 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
            {visibleInspirationItems.map((item, index) => (
              <Link
                key={`${item.title}-${item.tag}`}
                to={`/inspiration/${inspirationItems.findIndex((candidate) => candidate.title === item.title && candidate.tag === item.tag) + 1}`}
                className="group relative block h-[260px] overflow-hidden rounded-xl bg-slate-100 shadow-sm md:h-[280px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <span className="absolute right-3 top-3 rounded-md bg-[#2171B5] px-3 py-1 text-xs font-black text-white">
                  {item.tag}
                </span>
                <p className="absolute inset-x-3 bottom-3 text-sm font-black leading-5 text-white drop-shadow">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function OurServicesPage() {
  const { serviceSlug } = useParams();
  const { pathname } = useLocation();

  if (
    serviceSlug === "advisory" ||
    serviceSlug === "property-buying-advisory" ||
    serviceSlug === "business-advisory" ||
    serviceSlug === "foreigners-buying-assistance" ||
    pathname.includes("market-insight") ||
    pathname.includes("market-insights")
  ) {
    if (serviceSlug === "business-advisory") {
      return <BusinessAdvisoryPage />;
    }

    if (serviceSlug === "foreigners-buying-assistance") {
      return <ForeignersGuidePage />;
    }

    return <MarketInsightsPage />;
  }

  if (serviceSlug === "solar-panels") {
    return <SolarPanelsPage />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden text-white">
        <img
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
          alt="Property assistance consultation"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-x-0 top-0 h-2 bg-[#2171B5]" />

        <div className="relative mx-auto flex min-h-[420px] max-w-7xl flex-col items-center justify-center px-5 py-16 text-center lg:py-20">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-white/90">Buyer and Seller Assistance</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.03em] md:text-5xl lg:text-6xl">
            BUYER AND SELLER ASSISTANCE
          </h1>

          <div className="mt-8 w-full max-w-6xl rounded-none bg-black/25 px-4 py-4 backdrop-blur-[2px] md:px-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Need help with your property valuation?",
                "Need to get your deeds done?",
                "Want help with your housing loan application?",
                "Short for time or overwhelmed by the whole process?",
              ].map((item) => (
                <div key={item} className="flex items-start justify-center gap-2 text-left text-sm font-semibold leading-6 text-white">
                  <span className="mt-0.5 text-base text-blue-200">☑</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 max-w-5xl text-base leading-8 text-white/95 md:text-lg">
            Fear not. We're here to take the hassle off your entire property buying, selling or renting process, so you
            can look forward to enjoying your new property (or the profits of the sale). So contact us for more
            information.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="section-divider mx-auto h-1 w-16 rounded-full bg-[#2171B5]" />
          <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Services</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-4xl">
            Buyer and seller support made simple
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Find the right assistance for valuations, legal support, documents, mortgage advice, and day-to-day property help.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {buyerSellerServices.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#d9e8f6] bg-white shadow-[0_16px_40px_rgba(8,48,107,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(8,48,107,0.10)]">
                <div className="relative h-52">
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute left-4 top-4 rounded-2xl bg-white/95 p-3 text-[#2171B5] shadow-sm ring-1 ring-[#d9e8f6]">
                    <Icon size={24} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061f47]/30 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#2171B5]">{service.eyebrow}</p>
                  <h2 className="mt-1 text-xl font-black">{service.title}</h2>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{service.description}</p>
                  <h3 className="mt-5 text-sm font-black uppercase tracking-wide text-slate-800">{service.heading}</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <ShieldCheck className="mt-1 h-4 w-4 flex-none text-[#2171B5]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button type="button" className="mt-auto w-full rounded-xl bg-gradient-to-r from-[#2171B5] to-[#08306B] px-5 py-3 text-sm font-black text-white transition hover:shadow-lg hover:shadow-[#08306B]/20">
                    Learn More
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12">
        <div className="overflow-hidden rounded-[2rem] border border-[#d9e8f6] bg-gradient-to-r from-[#08306B] to-[#2171B5] shadow-[0_16px_40px_rgba(8,48,107,0.08)]">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="p-8 text-white md:p-10">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-blue-100">Solar & Hot Water</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] md:text-4xl">
                Discover Green Energy Solutions for Your Home
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100">
                Find solar panel providers, compare system types, explore net metering options, and request quotes from trusted solar partners.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/our-services/solar-panels"
                  className="rounded-xl bg-white px-6 py-3 text-sm font-black text-[#08306B] transition hover:bg-blue-50"
                >
                  Open Solar Panels Page
                </Link>
                <Link
                  to="/our-services/solar-panels#faq"
                  className="rounded-xl border border-white/30 px-6 py-3 text-sm font-black text-white transition hover:bg-white/10"
                >
                  View FAQs
                </Link>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&q=80&auto=format&fit=crop"
              alt="Solar rooftop panels"
              className="h-full min-h-[300px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12">
        <div className="rounded-[2rem] border border-[#d9e8f6] bg-gradient-to-b from-[#f8fbff] to-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)] md:p-8">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <div className="section-divider mx-auto h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Other</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-4xl">
              Other services that help you move forward
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              Whether you are moving house, protecting your contents, or preparing a listing, we can help with the extras too.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {otherServices.map((service) => (
              <div key={service.title} className="overflow-hidden rounded-2xl border border-[#d9e8f6] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img src={service.image} alt={service.title} className="h-40 w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <h3 className="text-lg font-black uppercase tracking-wide text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                  {service.link && (
                    <Link to={service.link} className="mt-4 inline-flex rounded-xl bg-gradient-to-r from-[#2171B5] to-[#08306B] px-5 py-2.5 text-sm font-black text-white transition hover:shadow-lg hover:shadow-[#08306B]/20">
                      Learn More
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button type="button" className="rounded-xl bg-gradient-to-r from-[#2171B5] to-[#08306B] px-6 py-3 text-sm font-black text-white transition hover:shadow-lg hover:shadow-[#08306B]/20">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="section-divider mb-4 h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Market</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-4xl">
              Market Research and Advisory
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Using our expertise and access to years of data, we can conduct market research, feasibility analysis, and
              advisory to help you identify market demand for your new project or get useful investment information.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Sri Lanka's largest real estate project and China's largest developer are among the companies we've done research for.
            </p>

            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1000&q=80&auto=format&fit=crop"
              alt="Market research and advisory"
              className="mt-6 h-72 w-full rounded-3xl object-cover shadow-[0_16px_40px_rgba(8,48,107,0.08)]"
            />
          </div>
          <div className="rounded-[2rem] border border-[#d9e8f6] bg-gradient-to-b from-[#f8fbff] to-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)]">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Our services</p>
            <h3 className="mt-3 text-2xl font-black text-slate-900">Research support designed for smart decisions</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {marketServices.map((item) => (
                <div key={item} className="rounded-2xl border border-[#d9e8f6] bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
            <button type="button" className="mt-6 rounded-xl bg-gradient-to-r from-[#2171B5] to-[#08306B] px-6 py-3 text-sm font-black text-white transition hover:shadow-lg hover:shadow-[#08306B]/20">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[2rem] bg-gradient-to-br from-[#08306B] to-[#2171B5] p-8 text-white shadow-[0_18px_50px_rgba(8,48,107,0.18)]">
          <Phone size={30} />
          <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-blue-100">Need help?</p>
          <h2 className="mt-3 text-3xl font-black">+94 (0) 117 167 167</h2>
          <p className="mt-3 text-sm leading-6 text-blue-100">
            Contact us and our team will guide you to the right property service.
          </p>
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-[2rem] border border-[#d9e8f6] bg-white shadow-[0_16px_40px_rgba(8,48,107,0.05)]">
            <div className="flex items-center gap-3 border-b border-[#eef4fb] px-6 py-4">
              <BriefcaseBusiness className="text-[#2171B5]" size={24} />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#2171B5]">Location</p>
                <h2 className="text-2xl font-black">Find Us on the Map</h2>
              </div>
            </div>
            <iframe
              title="Our Services location map"
              src="https://www.google.com/maps?q=Colombo%2C%20Sri%20Lanka&z=11&output=embed"
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <form className="rounded-[2rem] border border-[#d9e8f6] bg-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)]">
            <div className="flex items-center gap-3">
              <BriefcaseBusiness className="text-[#2171B5]" size={24} />
              <h2 className="text-2xl font-black">Contact Us</h2>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-slate-700">Name *</span>
                <input className="mt-2 w-full rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#d5e9fb]" />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-slate-700">Email *</span>
                <input type="email" className="mt-2 w-full rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#d5e9fb]" />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-slate-700">Phone *</span>
                <input className="mt-2 w-full rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#d5e9fb]" />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-slate-700">Select your services</span>
                <select className="mt-2 w-full rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#d5e9fb]">
                  <option>Property Valuations</option>
                  <option>Legal Assistance</option>
                  <option>Document preparation & submission</option>
                  <option>Mortgage Advice</option>
                  <option>Fees & taxes payment</option>
                  <option>Personal Assistance</option>
                  <option>Market Research and Advisory</option>
                </select>
              </label>
            </div>
            <label className="mt-4 block">
              <span className="text-sm font-bold text-slate-700">Message</span>
              <textarea rows={5} className="mt-2 w-full rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#d5e9fb]" />
            </label>
            <p className="mt-4 text-xs leading-5 text-slate-500">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>
            <button type="button" className="mt-5 rounded-xl bg-gradient-to-r from-[#2171B5] to-[#08306B] px-6 py-3 text-sm font-black text-white transition hover:shadow-lg hover:shadow-[#08306B]/20">
              Submit
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
