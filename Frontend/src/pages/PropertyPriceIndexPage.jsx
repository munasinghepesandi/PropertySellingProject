import { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import {
  BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'
import { TrendingUp } from 'lucide-react'

export default function PropertyPriceIndexPage() {
  const [activeTab, setActiveTab] = useState('overall')

  // Overall prices data with YoY change
  const overallPricesData = [
    {
      name: 'Houses',
      price: 85.12,
      change: 25.0,
      color: '#2171B5'
    },
    {
      name: 'Apartments',
      price: 93.63,
      change: 15.2,
      color: '#1e7aa0'
    },
    {
      name: 'Commercial',
      price: 346.51,
      change: 42.3,
      color: '#08306B'
    }
  ]

  // Regional house prices data
  const regionalHousesData = [
    { region: 'Colombo', price: 251.65 },
    { region: 'Western', price: 65.43 },
    { region: 'Southern', price: 49.91 },
    { region: 'Central', price: 52.77 },
    { region: 'North West', price: 39.18 }
  ]

  // Land prices by region (per perch)
  const landPricesData = [
    { region: 'Colombo', price: 16.08 },
    { region: 'Western', price: 2.47 },
    { region: 'Central', price: 1.53 },
    { region: 'Eastern', price: 0.649 },
    { region: 'Southern', price: 0.821 },
    { region: 'North West', price: 0.628 },
    { region: 'North Central', price: 0.362 },
    { region: 'Uva', price: 0.38 },
    { region: 'Sabaragamuwa', price: 0.215 }
  ]

  // Rental prices data
  const rentalPricesData = [
    { region: 'Colombo House', price: 657 },
    { region: 'Colombo Apt', price: 464 },
    { region: 'Western House', price: 259 }
  ]

  // Land by type data
  const landTypeData = [
    { type: 'Residential', price: 4.39, unit: 'per perch' },
    { type: 'Tea', price: 4.93, unit: 'per acre' },
    { type: 'Coconut', price: 7.62, unit: 'per acre' }
  ]

  const formatLandPrice = (value) => {
    if (value >= 1) return `Rs.${value.toFixed(2)}M`
    return `Rs.${(value * 1000).toFixed(0)}K`
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="bg-linear-to-r from-blue-900 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp size={32} />
            <h1 className="text-4xl font-bold">Sri Lanka Property Price Index</h1>
          </div>
          <p className="text-blue-100 mt-4">December 2025 (Q4) - Average Prices Based on 15,000+ Property Ads</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Info Box */}
        <div className="bg-slate-50 border-l-4 border-blue-600 p-6 mb-12 rounded">
          <p className="text-sm text-slate-700">
            <strong>Note:</strong> Average prices are based on property ads published on LankaPropertyWeb.com. 
            These are advertised prices and may not reflect final selling prices. 
            House and apartment prices are for 4-bedroom houses and 3-bedroom apartments respectively.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-8 border-b border-slate-200 overflow-x-auto">
          {[
            { id: 'overall', label: 'Overall Prices' },
            { id: 'regional', label: 'Regional Breakdown' },
            { id: 'land', label: 'Land Prices' },
            { id: 'rental', label: 'Rental Prices' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overall Prices Tab */}
        {activeTab === 'overall' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Average Sale Prices - December 2025</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Bar Chart */}
                <div className="bg-white p-6 rounded-lg border border-slate-200">
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={overallPricesData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="name" />
                      <YAxis label={{ value: 'Price (Millions Rs)', angle: -90, position: 'insideLeft' }} />
                      <Tooltip 
                        formatter={(value) => `Rs.${value.toFixed(2)}M`}
                        contentStyle={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}
                      />
                      <Bar dataKey="price" fill="#2171B5" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* YoY Change Chart */}
                <div className="bg-white p-6 rounded-lg border border-slate-200">
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={overallPricesData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="name" />
                      <YAxis label={{ value: 'YoY Change (%)', angle: -90, position: 'insideLeft' }} />
                      <Tooltip 
                        formatter={(value) => `${value.toFixed(1)}%`}
                        contentStyle={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}
                      />
                      <Bar dataKey="change" fill="#1e7aa0" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {overallPricesData.map((item, idx) => (
                  <div key={idx} className="bg-linear-to-br from-blue-50 to-slate-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-slate-900 mb-2">{item.name}</h3>
                    <p className="text-3xl font-bold text-blue-600 mb-2">Rs.{item.price.toFixed(2)}M</p>
                    <p className="text-sm text-slate-600">
                      <span className={item.change > 0 ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                        {item.change > 0 ? '+' : ''}{item.change.toFixed(1)}%
                      </span>
                      {' '}YoY Change
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Regional Breakdown Tab */}
        {activeTab === 'regional' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">House Prices by Region - December 2025</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Regional Bar Chart */}
                <div className="bg-white p-6 rounded-lg border border-slate-200">
                  <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={regionalHousesData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="region" angle={-45} textAnchor="end" height={80} />
                      <YAxis label={{ value: 'Price (Millions Rs)', angle: -90, position: 'insideLeft' }} />
                      <Tooltip 
                        formatter={(value) => `Rs.${value.toFixed(2)}M`}
                        contentStyle={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}
                      />
                      <Bar dataKey="price" fill="#2171B5" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Regional Comparison Table */}
                <div className="bg-white p-6 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-4">Regional Comparison</h3>
                  <div className="space-y-3">
                    {regionalHousesData.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between pb-3 border-b border-slate-100 last:border-0">
                        <span className="text-slate-700">{item.region}</span>
                        <div className="flex items-center gap-3">
                          <div className="w-32 bg-slate-100 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${(item.price / 251.65) * 100}%` }}
                            />
                          </div>
                          <span className="font-semibold text-slate-900 w-24 text-right">Rs.{item.price.toFixed(2)}M</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Regional Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
                {regionalHousesData.map((item, idx) => (
                  <div key={idx} className="bg-linear-to-br from-blue-50 to-slate-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-sm font-medium text-slate-600 mb-1">{item.region}</p>
                    <p className="text-2xl font-bold text-blue-600">Rs.{item.price.toFixed(2)}M</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Land Prices Tab */}
        {activeTab === 'land' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Residential Land Prices by Region - December 2025</h2>
              <p className="text-slate-600 mb-6">Per Perch</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Land Prices Chart */}
                <div className="bg-white p-6 rounded-lg border border-slate-200">
                  <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={landPricesData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="region" angle={-45} textAnchor="end" height={80} />
                      <YAxis label={{ value: 'Price (Millions Rs)', angle: -90, position: 'insideLeft' }} />
                      <Tooltip 
                        formatter={(value) => formatLandPrice(value)}
                        contentStyle={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}
                      />
                      <Bar dataKey="price" fill="#1e7aa0" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Land by Type */}
                <div className="bg-white p-6 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-4">Land Prices by Type</h3>
                  <div className="space-y-4">
                    {landTypeData.map((item, idx) => (
                      <div key={idx} className="border-b border-slate-100 pb-4 last:border-0">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-medium text-slate-900">{item.type}</span>
                          <span className="text-sm text-slate-600">{item.unit}</span>
                        </div>
                        <p className="text-2xl font-bold text-blue-600">Rs.{item.price.toFixed(2)}M</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Land Price Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                {landPricesData.slice(0, 8).map((item, idx) => (
                  <div key={idx} className="bg-linear-to-br from-teal-50 to-slate-50 p-4 rounded-lg border border-teal-200">
                    <p className="text-sm font-medium text-slate-600 mb-1">{item.region}</p>
                    <p className="text-lg font-bold text-teal-600">{formatLandPrice(item.price)}</p>
                    <p className="text-xs text-slate-500 mt-1">per perch</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Rental Prices Tab */}
        {activeTab === 'rental' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Average Rental Prices by Region - December 2025</h2>
              <p className="text-slate-600 mb-6">Per Month (4-bedroom houses and 3-bedroom apartments)</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Rental Chart */}
                <div className="bg-white p-6 rounded-lg border border-slate-200">
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={rentalPricesData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="region" />
                      <YAxis label={{ value: 'Price (Thousands Rs)', angle: -90, position: 'insideLeft' }} />
                      <Tooltip 
                        formatter={(value) => `Rs.${value}K/month`}
                        contentStyle={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}
                      />
                      <Bar dataKey="price" fill="#08306B" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Rental Details */}
                <div className="bg-white p-6 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-4">Rental Breakdown</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-slate-600 mb-2">Colombo</p>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium text-slate-700">House (4BR)</span>
                          <span className="font-bold text-blue-600">Rs.657K</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-slate-700">Apartment (3BR)</span>
                          <span className="font-bold text-blue-600">Rs.464K</span>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-slate-100 pt-4">
                      <p className="text-sm text-slate-600 mb-2">Western Province</p>
                      <div className="flex justify-between">
                        <span className="font-medium text-slate-700">House (4BR)</span>
                        <span className="font-bold text-blue-600">Rs.259K</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rental Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {rentalPricesData.map((item, idx) => (
                  <div key={idx} className="bg-linear-to-br from-indigo-50 to-slate-50 p-6 rounded-lg border border-indigo-200">
                    <p className="text-sm font-medium text-slate-600 mb-2">{item.region}</p>
                    <p className="text-3xl font-bold text-indigo-600">Rs.{item.price}K</p>
                    <p className="text-xs text-slate-500 mt-2">per month</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Footer Info */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Related Resources</h3>
          <ul className="space-y-2 text-slate-700">
            <li className="hover:text-blue-600 cursor-pointer">• Land Prices in the Western Province Increase by 74% from 2018 to 2021</li>
            <li className="hover:text-blue-600 cursor-pointer">• Land Prices in Greater Colombo Increase by Up to 64% as Demand Grows</li>
            <li className="hover:text-blue-600 cursor-pointer">• What are the Top Property Hot-Spots Around Colombo?</li>
            <li className="hover:text-blue-600 cursor-pointer">• Land Prices in Colombo Keeps Rising and Remains the Best Investment</li>
            <li className="hover:text-blue-600 cursor-pointer">• Colombo Sees No Slowdown of Apartments Coming Up</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  )
}
