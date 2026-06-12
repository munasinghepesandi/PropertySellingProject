import { useState } from "react";
import Navbar from "../components/Navbar";
import {
  MapPin,
  BedDouble,
  Square,
} from "lucide-react";

const properties = [
  {
    id: 1,
    title: "1.25 acres bare land in Kandy",
    location: "Kandy",
    price: "Rs. 2,500,000",
    type: "Bare Land",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
    size: "1.25 acres",
  },
  {
    id: 2,
    title: "Luxury 3 Bed Villa",
    location: "Digana",
    price: "Rs. 275M",
    type: "Villa",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    beds: 3,
    size: "4000 sqft",
  },
  {
    id: 3,
    title: "Luxury House in Wadduwa",
    location: "Wadduwa",
    price: "Rs. 25.5M",
    type: "House",
    image:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
    beds: 2,
    size: "1200 sqft",
  },
  {
    id: 4,
    title: "Modern Apartment",
    location: "Colombo 2",
    price: "Rs. 360,000",
    type: "Apartment",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    beds: 2,
    size: "764 sqft",
  },
];

const trending = [
  {
    id: 1,
    title: "Luxury House",
    location: "Maharagama",
    price: "Rs. 70M",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    beds: 5,
    size: "4500 sqft",
  },
  {
    id: 2,
    title: "Coconut Land",
    location: "Narammala",
    price: "Rs. 350M",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    size: "30 acres",
  },
  {
    id: 3,
    title: "Bare Land",
    location: "Nugegoda",
    price: "Rs. 4.2M",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    size: "10 perches",
  },
];

export default function Invest() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    "I'm looking to invest in a property with a high ROI",
    "I’d like to start a business in Sri Lanka",
    "I’d like to setup a manufacturing factory in Sri Lanka",
    "I’d like to start a Real Estate project in Sri Lanka",
    "Other",
  ];

  const handleCheckbox = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* HERO */}
      <section
        className="relative h-[650px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 px-6 md:px-16 max-w-4xl text-white">
          <p className="uppercase tracking-[4px] text-sm text-gray-300 mb-4">
            Premium Real Estate Investments
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Invest in Sri Lanka’s <br />
            Fastest Growing Properties
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl">
            Discover luxury villas, apartments, commercial lands and
            high-return investment opportunities across the island.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition">
              Explore Investments
            </button>

            <button className="border border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition">
              Contact Advisor
            </button>
          </div>
        </div>
      </section>

      {/* TOP INVESTMENTS */}
      <section className="px-10 py-10">
        <h2 className="text-2xl font-bold mb-6">
          Top Investment Properties
        </h2>

        <div className="flex gap-6 overflow-x-auto pb-4">
          {properties.map((item) => (
            <div
              key={item.id}
              className="min-w-[280px] bg-white rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-44 w-full object-cover rounded-t-xl"
              />

              <div className="p-4">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <MapPin size={16} /> {item.location}
                </div>

                <h3 className="font-semibold mt-2 text-sm">
                  {item.title}
                </h3>

                <div className="flex items-center gap-4 text-sm mt-2 text-gray-600">
                  {item.beds && (
                    <span className="flex items-center gap-1">
                      <BedDouble size={16} /> {item.beds}
                    </span>
                  )}

                  <span className="flex items-center gap-1">
                    <Square size={16} /> {item.size}
                  </span>
                </div>

                <div className="mt-3 font-bold text-green-600">
                  {item.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRENDING */}
      <section className="px-10 py-10">
        <h2 className="text-2xl font-bold mb-6">
          Trending Properties
        </h2>

        <div className="flex gap-6 overflow-x-auto">
          {trending.map((item) => (
            <div
              key={item.id}
              className="min-w-[280px] bg-white rounded-xl shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-44 w-full object-cover rounded-t-xl"
              />

              <div className="p-4">
                <div className="text-sm text-gray-500 flex items-center gap-2">
                  <MapPin size={16} /> {item.location}
                </div>

                <h3 className="font-semibold mt-2">
                  {item.title}
                </h3>

                <div className="mt-2 text-gray-600 text-sm">
                  {item.size}
                </div>

                <div className="mt-3 font-bold text-green-600">
                  {item.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY INVEST */}
      <section className="px-10 py-14 bg-white">
        <h2 className="text-3xl font-bold mb-10">
          Why Invest
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border-2 border-red-400 rounded-2xl p-8 text-center">
            <h3 className="text-3xl text-red-500 font-bold">
              Rapid Growth
            </h3>

            <p className="mt-4 text-gray-600">
              Sri Lanka’s infrastructure, business, tourism and real
              estate industry are constantly improving.
            </p>
          </div>

          <div className="border-2 border-red-400 rounded-2xl p-8 text-center">
            <h3 className="text-3xl text-red-500 font-bold">
              1–2%
            </h3>

            <p className="mt-4 text-gray-600">
              Condominiums still represent a small portion of housing
              supply in Colombo.
            </p>
          </div>

          <div className="border-2 border-red-400 rounded-2xl p-8 text-center">
            <h3 className="text-3xl text-red-500 font-bold">
              665 Acres
            </h3>

            <p className="mt-4 text-gray-600">
              Major land development projects are shaping the future
              of real estate.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT / INVESTMENT PREFERENCES */}
      <section className="bg-[#f5f5f5] px-6 md:px-16 py-16">
        <div className="text-center mb-14">
          <p className="uppercase tracking-wide text-sm font-semibold text-gray-700">
            Contact Us
          </p>

          <h2 className="text-3xl md:text-5xl font-light leading-tight mt-3">
            Connect with your investment adviser by quickly selecting
            your investment preferences
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-14">
          {/* LEFT SIDE */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">
              1. What is the main purpose of your investment?
            </h3>

            <div className="space-y-5">
              {options.map((option, index) => (
                <label
                  key={index}
                  className="flex items-center gap-4 border-b pb-5 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleCheckbox(option)}
                    className="w-5 h-5"
                  />

                  <span className="text-lg text-gray-700">
                    {option}
                  </span>
                </label>
              ))}
            </div>

            {/* INVESTMENT AMOUNT */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">
                2. How much are you looking to invest in real estate
              </h3>

              <div className="flex gap-4">
                <select className="border rounded-lg px-4 py-3 bg-white">
                  <option>LKR</option>
                  <option>USD</option>
                </select>

                <input
                  type="text"
                  placeholder="Enter the Amount"
                  className="border rounded-lg px-4 py-3 w-full"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-8">
              Connect with our advisory team by filling in your details
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Name"
                className="w-full border rounded-lg px-4 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-lg px-4 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Enter Number"
                className="w-full border rounded-lg px-4 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="5"
                placeholder="Message"
                className="w-full border rounded-lg px-4 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="space-y-4 text-sm text-gray-600">
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <span>
                    I agree to the Privacy Policy and Terms of Use
                  </span>
                </label>

                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <span>
                    I want to be on the exclusive mailing list to hear
                    about new opportunities first
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
