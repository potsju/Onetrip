import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Calendar, MapPin, Clock, DollarSign, Star, ChevronDown, ChevronUp,
  PieChart, Download, Share2, Printer
} from 'lucide-react';
import { demoItinerary } from '../data/itineraryData';

type ActiveTab = 'overview' | 'activities' | 'map';

const ItineraryViewPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');
  const [expandedDays, setExpandedDays] = useState<Set<number>>(new Set([1]));

  // In a real app, you would fetch the itinerary based on the ID
  const itinerary = demoItinerary;

  const toggleDay = (dayNumber: number) => {
    setExpandedDays(prev => {
      const newSet = new Set(prev);
      if (newSet.has(dayNumber)) {
        newSet.delete(dayNumber);
      } else {
        newSet.add(dayNumber);
      }
      return newSet;
    });
  };

  const getTotalCost = () => {
    return itinerary.costs.accommodation + 
           itinerary.costs.activities + 
           itinerary.costs.food + 
           itinerary.costs.transportation;
  };

  // Calculate trip duration in days
  const tripDuration = itinerary.days.length;

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-primary-900">
        <div className="absolute inset-0 z-0 opacity-30 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${itinerary.coverImage})` }}
          ></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-white">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div>
              <div className="flex items-center mb-2">
                <MapPin size={18} className="mr-2" />
                <span className="text-lg">{itinerary.destination}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 animate-fade-in">{itinerary.title}</h1>
            </div>
            <div className="flex space-x-3 mt-4 md:mt-0">
              <button className="btn bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white flex items-center">
                <Share2 size={18} className="mr-2" />
                Share
              </button>
              <button className="btn bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white flex items-center">
                <Download size={18} className="mr-2" />
                Download
              </button>
              <button className="btn bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white flex items-center">
                <Printer size={18} className="mr-2" />
                Print
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center">
              <Calendar size={20} className="mr-3 text-accent-300" />
              <div>
                <div className="text-sm text-gray-200">Duration</div>
                <div className="font-semibold">{tripDuration} days</div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center">
              <Clock size={20} className="mr-3 text-accent-300" />
              <div>
                <div className="text-sm text-gray-200">Travel Style</div>
                <div className="font-semibold">{itinerary.travelStyle}</div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center">
              <DollarSign size={20} className="mr-3 text-accent-300" />
              <div>
                <div className="text-sm text-gray-200">Total Budget</div>
                <div className="font-semibold">${getTotalCost().toLocaleString()}</div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center">
              <Star size={20} className="mr-3 text-accent-300" />
              <div>
                <div className="text-sm text-gray-200">Value Rating</div>
                <div className="font-semibold">{itinerary.valueRating}/10</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="sticky top-0 bg-white shadow-md z-20">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            <button 
              className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === 'overview' 
                  ? 'border-primary-600 text-primary-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === 'activities' 
                  ? 'border-primary-600 text-primary-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('activities')}
            >
              Day-by-Day
            </button>
            <button 
              className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === 'map' 
                  ? 'border-primary-600 text-primary-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('map')}
            >
              Map
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                  <h2 className="text-2xl font-bold mb-4">Trip Overview</h2>
                  <p className="text-gray-700 mb-6">{itinerary.description}</p>
                  
                  <h3 className="text-xl font-semibold mb-3">Trip Highlights</h3>
                  <ul className="space-y-2 mb-6">
                    {itinerary.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <Star size={18} className="text-accent-500 mr-2 mt-1 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-semibold mb-3">Essential Information</h3>
                  <div className="text-gray-700">
                    <p className="mb-2"><strong>Best time to visit:</strong> {itinerary.bestTimeToVisit}</p>
                    <p className="mb-2"><strong>Currency:</strong> {itinerary.currency}</p>
                    <p className="mb-2"><strong>Language:</strong> {itinerary.language}</p>
                    <p><strong>Visa requirements:</strong> {itinerary.visaRequirements}</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold mb-4">Cost Efficiency Analysis</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="mb-4">
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700 font-medium">Value for Money</span>
                          <span className="text-gray-700 font-medium">{itinerary.costEfficiency.valueForMoney}/10</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-success-500 h-2.5 rounded-full" style={{ width: `${itinerary.costEfficiency.valueForMoney * 10}%` }}></div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700 font-medium">Cost vs. Similar Trips</span>
                          <span className="text-gray-700 font-medium">{itinerary.costEfficiency.costVsSimilar}/10</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-success-500 h-2.5 rounded-full" style={{ width: `${itinerary.costEfficiency.costVsSimilar * 10}%` }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700 font-medium">Seasonal Pricing</span>
                          <span className="text-gray-700 font-medium">{itinerary.costEfficiency.seasonalPricing}/10</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-success-500 h-2.5 rounded-full" style={{ width: `${itinerary.costEfficiency.seasonalPricing * 10}%` }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3">Saving Opportunities</h3>
                      <ul className="space-y-2">
                        {itinerary.costEfficiency.savingTips.map((tip, index) => (
                          <li key={index} className="flex items-start">
                            <DollarSign size={16} className="text-success-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-white rounded-xl shadow-sm p-6 mb-8 sticky top-20">
                  <h2 className="text-xl font-bold mb-4">Trip Summary</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-gray-700 font-medium mb-2">Total Cost</h3>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-gray-900">${getTotalCost().toLocaleString()}</span>
                      <span className="text-gray-500 ml-2">for {tripDuration} days</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">${Math.round(getTotalCost() / tripDuration).toLocaleString()} per day</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-gray-700 font-medium mb-2">Cost Breakdown</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Accommodation</span>
                        <span className="font-medium">${itinerary.costs.accommodation.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Food</span>
                        <span className="font-medium">${itinerary.costs.food.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Activities</span>
                        <span className="font-medium">${itinerary.costs.activities.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Transportation</span>
                        <span className="font-medium">${itinerary.costs.transportation.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-gray-700 font-medium mb-2">Included in this Itinerary</h3>
                    <ul className="space-y-2">
                      {itinerary.included.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="text-primary-600 mr-2">✓</div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Activities Tab */}
          {activeTab === 'activities' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-6">Daily Activities</h2>
                <div className="space-y-4">
                  {itinerary.days.map((day) => (
                    <div key={day.day} className="border-b border-gray-200 last:border-b-0">
                      <div 
                        className="flex items-center justify-between py-4 cursor-pointer"
                        onClick={() => toggleDay(day.day)}
                      >
                        <div>
                          <h3 className="text-lg font-semibold">Day {day.day}: {day.title}</h3>
                          <p className="text-gray-600 text-sm">{day.description}</p>
                        </div>
                        {expandedDays.has(day.day) ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </div>
                      
                      {expandedDays.has(day.day) && (
                        <div className="pb-6 px-2">
                          <p className="text-gray-700 mb-6">{day.description}</p>
                          
                          <div className="space-y-6">
                            {day.activities.map((activity, index) => (
                              <div key={index} className="flex">
                                <div className="flex-shrink-0 w-16 text-gray-500 font-medium">
                                  {activity.time}
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-gray-800 mb-1">{activity.title}</h4>
                                  <p className="text-gray-600 mb-2">{activity.description}</p>
                                  {activity.cost && (
                                    <div className="text-sm text-gray-500">
                                      Estimated cost: ${activity.cost}
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          {day.accommodation && (
                            <div className="mt-8 bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-semibold text-gray-800 mb-2">Accommodation</h4>
                              <p className="text-gray-700">{day.accommodation}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Map Tab */}
          {activeTab === 'map' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h2 className="text-2xl font-bold mb-6">Itinerary Map</h2>
                
                <div className="mb-6">
                  <p className="text-gray-700">Interactive map showing your daily routes and points of interest.</p>
                </div>
                
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Interactive map would be displayed here</p>
                    <p className="text-sm text-gray-400">With points for each activity and accommodation</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ItineraryViewPage;