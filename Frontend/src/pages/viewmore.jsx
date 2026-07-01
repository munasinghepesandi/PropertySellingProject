import React, { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ImageWithFallback from "../components/ImageWithFallback";
import { API_BASE_URL } from "../utils/auth";

import {
  ArrowLeft,
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  Building2,
  LayoutGrid,
  Star,
 
  Banknote,
  Percent,
  CalendarDays,
} from "lucide-react";

export default function PropertyDetails() {
  const [searchParams] = useSearchParams();
  const propertyId = searchParams.get("id");
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);
  const [propertyValue, setPropertyValue] = useState(129750000);
  const [downPayment, setDownPayment] = useState(20000000);
  const [interestRate, setInterestRate] = useState(11.5);
  const [loanPeriod, setLoanPeriod] = useState(20);

  const apiOrigin = useMemo(() => API_BASE_URL.replace(/\/api\/?$/, ""), []);

  const resolveImage = (imagePath) => {
    if (!imagePath) {
      return "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1400&auto=format&fit=crop";
    }

    if (imagePath.startsWith("http")) {
      return imagePath;
    }

    return `${apiOrigin}${imagePath}`;
  };

  const parseImages = (value) => {
    if (!value) return [];
    if (Array.isArray(value)) return value;

    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [value];
    } catch {
      return [value];
    }
  };

  useEffect(() => {
    let isMounted = true;

    const fetchProperty = async () => {
      if (!propertyId) {
        if (isMounted) {
          setLoading(false);
          setError("No property selected.");
        }
        return;
      }

      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API_BASE_URL}/properties/${propertyId}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.message || "Unable to load property details");
        }

        if (!isMounted) return;

        setProperty(data);
        setSelectedImage(0);
      } catch (err) {
        if (!isMounted) return;
        setError(err.message || "Unable to load property details");
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchProperty();

    return () => {
      isMounted = false;
    };
  }, [propertyId]);

  const images = useMemo(() => {
    if (!property) return [];
    return parseImages(property.images);
  }, [property]);

  const sections = [
    "Overview",
    "Highlights",
    "About",
    "Floor Plans",
    "Amenities",
    "Bank Loans",
    "Loan Calculator",
    "Enquiry",
  ];

  const highlights = [
    "Dedicated concierge service available 24/7",
    "Rooftop infinity pool with skyline views",
    "Luxury doorman and security service",
    "Hotel-style residential living experience",
    "Premium serviced residence lifestyle",
    "Elite Colombo 07 landmark address",
  ];

  const loanOffers = [
    {
      bank: "Commercial Bank",
      rate: "11.5% p.a",
      tenure: "Up to 25 years",
      note: "Flexible repayment options",
    },
    {
      bank: "HNB Bank",
      rate: "12.0% p.a",
      tenure: "Up to 30 years",
      note: "Fast approval process",
    },
    {
      bank: "Sampath Bank",
      rate: "11.8% p.a",
      tenure: "Up to 20 years",
      note: "Special housing packages",
    },
  ];

  // Loan calculation
  const loanAmount = propertyValue - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const months = loanPeriod * 12;

  const emi =
    monthlyRate === 0
      ? loanAmount / months
      : (loanAmount *
          monthlyRate *
          Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

  const format = (num) =>
    num?.toLocaleString("en-LK", { maximumFractionDigits: 0 });

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f4f7fb]">
        <Navbar />
        <div className="mx-auto max-w-6xl px-4 py-16 text-center text-slate-600">
          Loading property details...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#f4f7fb]">
        <Navbar />
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        </div>
      </div>
    );
  }

  const title = property?.title || "Property Details";
  const location = property?.district_name || property?.city || property?.address || "—";
  const priceText = property?.price ? `LKR ${format(property.price)}` : "Price on request";
  const mainImage = images[selectedImage] || property?.cover_image;

  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      <Navbar />

      <div className="max-w-375 mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* MAIN CONTENT */}
        <main className="lg:col-span-8 space-y-6">

          {/* IMAGES */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <ImageWithFallback
              src={resolveImage(mainImage)}
              alt={title}
              className="lg:col-span-2 h-80 md:h-95 w-full object-cover rounded-2xl shadow-md"
            />

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
              {images.slice(0, 3).map((img, i) => (
                <ImageWithFallback
                  key={i}
                  src={resolveImage(img)}
                  alt={`${title} ${i + 1}`}
                  className="h-37.5 md:h-45 w-full object-cover rounded-2xl shadow-md"
                  onClick={() => setSelectedImage(i)}
                />
              ))}
            </div>
          </div>

          {/* OVERVIEW */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-[#01343D] mb-4">
              Overview
            </h2>

            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <MapPin className="mx-auto text-[#2171B5]" />
                <p className="text-sm text-gray-500">Location</p>
                <h3 className="font-bold">{location}</h3>
              </div>

              <div>
                <Building2 className="mx-auto text-[#2171B5]" />
                <p className="text-sm text-gray-500">Units</p>
                <h3 className="font-bold">{property?.image_count || images.length || 1}</h3>
              </div>

              <div>
                <Maximize className="mx-auto text-[#2171B5]" />
                <p className="text-sm text-gray-500">Size</p>
                <h3 className="font-bold">{property?.floor_area || property?.land_area || property?.area || "—"}</h3>
              </div>

              <div>
                <LayoutGrid className="mx-auto text-[#2171B5]" />
                <p className="text-sm text-gray-500">Completion</p>
                <h3 className="font-bold">{property?.status || "active"}</h3>
              </div>
            </div>
          </div>

          {/* HIGHLIGHTS */}
          <div className="bg-[#01343D] text-white rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">Highlights</h2>
            <div className="space-y-3">
              {highlights.map((h, i) => (
                <div key={i} className="flex gap-3">
                  <Star className="text-yellow-400" size={16} />
                  <p className="text-white/90">{h}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ABOUT */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-[#08306B] mb-3">
              About
            </h2>
            <p className="text-gray-600 leading-8">
              {property?.description || "Property description is not available yet."}
            </p>
          </div>

          {/* BANK LOAN OFFERS */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-[#08306B] mb-4">
              Bank Loan Offers
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              {loanOffers.map((loan, i) => (
                <div key={i} className="border rounded-xl p-4 bg-[#f9fbff]">
                  <h3 className="font-bold text-[#08306B] flex items-center gap-2">
                    <Banknote size={16} /> {loan.bank}
                  </h3>
                  <p className="text-sm mt-2 flex items-center gap-2 text-gray-600">
                    <Percent size={14} /> {loan.rate}
                  </p>
                  <p className="text-sm flex items-center gap-2 text-gray-600">
                    <CalendarDays size={14} /> {loan.tenure}
                  </p>
                  <p className="text-xs mt-2 text-gray-500">{loan.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* LOAN CALCULATOR */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-[#08306B] mb-4">
              Loan Calculator
            </h2>

            <div className="grid md:grid-cols-4 gap-4">
              <input
                type="number"
                value={propertyValue}
                onChange={(e) => setPropertyValue(+e.target.value)}
                placeholder="Property Value"
                className="border p-2 rounded-lg"
              />

              <input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(+e.target.value)}
                placeholder="Down Payment"
                className="border p-2 rounded-lg"
              />

              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(+e.target.value)}
                placeholder="Interest Rate"
                className="border p-2 rounded-lg"
              />

              <input
                type="number"
                value={loanPeriod}
                onChange={(e) => setLoanPeriod(+e.target.value)}
                placeholder="Years"
                className="border p-2 rounded-lg"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-[#f4f7fb] p-4 rounded-xl text-center">
                <p className="text-sm text-gray-500">Loan Amount</p>
                <h3 className="font-bold text-[#08306B]">
                  LKR {format(loanAmount)}
                </h3>
              </div>

              <div className="bg-[#e6f0ff] p-4 rounded-xl text-center">
                <p className="text-sm text-gray-500">Monthly EMI</p>
                <h3 className="font-bold text-[#2171B5]">
                  LKR {format(emi)}
                </h3>
              </div>

              <div className="bg-[#f4f7fb] p-4 rounded-xl text-center">
                <p className="text-sm text-gray-500">Total Payable</p>
                <h3 className="font-bold text-[#08306B]">
                  LKR {format(emi * loanPeriod * 12)}
                </h3>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-linear-to-r from-[#0f7a8d] to-[#01343D] text-white p-6 rounded-2xl">
            <h2 className="text-2xl font-bold">Interested in this property?</h2>
            <p className="mt-2 text-white/80">Contact us for viewing or details.</p>
            <div className="flex gap-3 mt-4">
              <button className="bg-white text-[#08306B] px-4 py-2 rounded-lg">Enquire</button>
              <button className="border px-4 py-2 rounded-lg">Download</button>
            </div>
          </div>

        </main>

        {/* RIGHT STICKY PANEL */}
        <aside className="lg:col-span-4 sticky top-6 h-fit">
          <div className="bg-white rounded-2xl shadow-md p-5 space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold text-[#08306B]">{title}</h2>
                  <p className="text-gray-500 flex items-center gap-2 mt-1"><MapPin size={14} /> {location}</p>
              </div>
              <div className="flex gap-2">
                <button className="rounded-md border px-3 py-2 text-sm">Save</button>
                <button className="rounded-md border px-3 py-2 text-sm">Share</button>
              </div>
            </div>

            <div>
              <div className="text-2xl font-bold text-[#2171B5]">{priceText}</div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <div className="bg-[#f4f7fb] p-2 rounded-lg"><BedDouble size={14} className="mx-auto text-[#2171B5]" /><p className="text-xs">4</p></div>
                <div className="bg-[#f4f7fb] p-2 rounded-lg"><Bath size={14} className="mx-auto text-[#2171B5]" /><p className="text-xs">3</p></div>
                <div className="bg-[#f4f7fb] p-2 rounded-lg"><Maximize size={14} className="mx-auto text-[#2171B5]" /><p className="text-xs">3200 sqft</p></div>
              </div>
            </div>

            <div className="pt-2">
              <button className="w-full rounded-md bg-[#01343d] px-4 py-3 text-white font-semibold">Contact Agent</button>
              <button className="w-full mt-2 rounded-md border px-4 py-3">Request Call</button>
            </div>

            <div className="border-t pt-4">
              <h4 className="text-sm font-semibold text-slate-700">Agent</h4>
              <div className="mt-3 flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-slate-200" />
                <div>
                  <div className="font-semibold">{property?.owner_name || "Property Owner"}</div>
                  <div className="text-xs text-gray-500">{property?.district_name || property?.city || "Listing Owner"}</div>
                  <div className="mt-2 text-sm font-medium text-[#08306B]">{property?.owner_phone || property?.phone || "—"}</div>
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <h4 className="text-sm font-semibold text-slate-700">Location</h4>
              <div className="mt-2 h-36 overflow-hidden rounded-md">
                <iframe title="map" src="https://maps.google.com/maps?q=Kandy&t=&z=13&ie=UTF8&iwloc=&output=embed" className="w-full h-full" />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
