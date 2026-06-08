import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Sun,
  Truck,
  Building,
  Home,
  Hammer,
  Wrench,
  Users,
  Droplet,
  TreePine,
} from "lucide-react";

export default function Ideal() {
  const location = useLocation()
  const isActive = (path) => location.pathname.startsWith(path)
  const categories = [
    { name: "Sofas", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc" },
    { name: "Chairs & Stools", img: "https://images.unsplash.com/photo-1503602642458-232111445657" },
    { name: "Living Room", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb" },
    { name: "Wardrobes", img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf" },
    { name: "Carpets", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
    { name: "Beds", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" },
    { name: "Dining", img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115" },
  ];

  const construction = [
    { name: "House Builders", icon: <Home size={40} /> },
    { name: "Kitchen and Pantry Units", icon: <Building size={40} /> },
    { name: "Gates", icon: <Hammer size={40} /> },
    { name: "Machines for Hire", icon: <Wrench size={40} /> },
    { name: "Pipes and Tanks", icon: <Droplet size={40} /> },
    { name: "Swimming Pool Construction", icon: <Droplet size={40} /> },
    { name: "Aluminum Works", icon: <Hammer size={40} /> },
    { name: "Building Material", icon: <Building size={40} /> },
    { name: "Doors", icon: <Home size={40} /> },
    { name: "Glass", icon: <Building size={40} /> },
  ];

  const professionals = [
    { name: "Valuers", icon: <Users size={40} /> },
    { name: "House Movers", icon: <Truck size={40} /> },
    { name: "Masons", icon: <Hammer size={40} /> },
    { name: "Consultants", icon: <Users size={40} /> },
    { name: "Carpenters", icon: <Hammer size={40} /> },
    { name: "Interior Designers", icon: <Home size={40} /> },
    { name: "Plumbers", icon: <Wrench size={40} /> },
    { name: "Sewage Cleaning", icon: <Droplet size={40} /> },
    { name: "Quantity Surveyors", icon: <Building size={40} /> },
    { name: "Landscaping", icon: <TreePine size={40} /> },
  ];

  return (
    <div className="font-sans bg-[#f4f8fd] min-h-screen">
      <div className="bg-gradient-to-r from-[#08306B] to-[#2171B5] text-white px-8 py-4 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold">ideal <span className="text-white/80">home</span></h1>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link to="/more/ideal-home/appliances" className={`hover:text-gray-200 ${isActive('/more/ideal-home') ? 'text-white underline' : ''}`}>PRODUCTS</Link>
          <Link to="/more/ideal-home/house-construction" className={`hover:text-gray-200 ${isActive('/more/ideal-home/house-construction') ? 'text-white underline' : ''}`}>HOUSE CONSTRUCTION</Link>
          <Link to="/more/ideal-home/professionals" className={`hover:text-gray-200 ${isActive('/more/ideal-home/professionals') ? 'text-white underline' : ''}`}>FIND PROFESSIONALS</Link>
          <Link to="/inspiration" className={`hover:text-gray-200 ${isActive('/inspiration') ? 'text-white underline' : ''}`}>INSPIRATIONS</Link>
          <Link to="/more" className={`hover:text-gray-200 ${isActive('/more') ? 'text-white underline' : ''}`}>MORE</Link>
        </div>

        <button className="bg-white text-[#08306B] px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">POST YOUR AD</button>
      </div>

      <div className="relative h-[420px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511')" }}>
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
          <p className="text-lg mb-2">There's no place like HOME. Make it your</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">IDEAL HOME</h1>
          <p className="mb-5">Products • Professionals • Inspirations</p>

          <div className="flex w-full max-w-2xl bg-white rounded-lg overflow-hidden shadow">
            <input type="text" placeholder="Search products, professionals and inspirations" className="flex-1 px-4 py-3 text-gray-700 outline-none" />
            <button className="bg-[#2171B5] px-6 text-white font-semibold hover:bg-[#08306B] transition">SEARCH</button>
          </div>
        </div>
      </div>

      <div className="py-12 text-center">
        <h2 className="text-xl font-semibold mb-8 text-[#08306B]">Find the Best Companies Under One Platform</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition duration-300">
            <Sun className="mx-auto mb-4 text-[#2171B5]" size={40} />
            <h3 className="text-lg font-semibold text-[#2171B5]">Solar</h3>
            <p className="text-gray-500 text-sm mt-2">Go green with solar solutions</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition duration-300">
            <Building className="mx-auto mb-4 text-[#2171B5]" size={40} />
            <h3 className="text-lg font-semibold text-[#2171B5]">House Builders</h3>
            <p className="text-gray-500 text-sm mt-2">Build your dream home</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition duration-300">
            <Truck className="mx-auto mb-4 text-[#2171B5]" size={40} />
            <h3 className="text-lg font-semibold text-[#2171B5]">Movers</h3>
            <p className="text-gray-500 text-sm mt-2">Safe relocation services</p>
          </div>
        </div>
      </div>

      <div className="py-12 text-center">
        <h2 className="text-2xl font-semibold mb-10 text-[#08306B]">Shop For Your Home</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-6 md:px-12">
          {categories.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer">
              <img src={item.img} alt={item.name} className="h-24 w-full object-cover rounded mb-3" />
              <p className="text-sm font-semibold text-gray-700">{item.name.toUpperCase()}</p>
            </div>
          ))}
        </div>
          <div className="mt-6 text-center">
            <a href="/more/ideal-home/appliances" className="text-sm text-[#2171B5] hover:underline">View Appliances & Electronics</a>
          </div>
      </div>

      <div className="py-12 bg-[#eef5fc] text-center">
        <h2 className="text-2xl font-semibold mb-10 text-[#08306B]">House Construction</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-6 md:px-20">
          {construction.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition duration-300 border hover:border-[#2171B5]">
              <div className="text-[#2171B5] mb-3 flex justify-center">{item.icon}</div>
              <p className="text-sm font-semibold text-gray-700 uppercase">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-12 text-center">
        <h2 className="text-2xl font-semibold mb-10 text-[#08306B]">Find professionals</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-6 md:px-20">
          {professionals.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition duration-300 border hover:border-[#2171B5]">
              <div className="text-[#2171B5] mb-3 flex justify-center">{item.icon}</div>
              <p className="text-sm font-semibold text-gray-700 uppercase">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-12 px-6 md:px-20">
        <h3 className="text-xl font-semibold mb-4 text-[#08306B]">Guides & Indices</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/property-buying-guide" className="text-sm text-[#2171B5] hover:underline">Property Buying Guide</Link>
          <Link to="/sales/foreigners-guide" className="text-sm text-[#2171B5] hover:underline">Foreign Buyers' Guide</Link>
          <Link to="/capital-gains-tax" className="text-sm text-[#2171B5] hover:underline">Capital Gains Tax</Link>
          <Link to="/price-indices" className="text-sm text-[#2171B5] hover:underline">Sri Lanka House Price Index</Link>
          <Link to="/landpriceindex" className="text-sm text-[#2171B5] hover:underline">Sri Lanka Land Price Index</Link>
          <Link to="/membership-benefits" className="text-sm text-[#2171B5] hover:underline">Membership Benefits</Link>
        </div>
      </div>

    </div>
  );
}
