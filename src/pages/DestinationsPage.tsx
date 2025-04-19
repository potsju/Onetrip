import React, { useState } from 'react';
import { Search } from 'lucide-react';
import DestinationCard from '../components/destination/DestinationCard';
import { allDestinations } from '../data/destinationsData';

const regions = [
  'All Regions',
  'Europe',
  'Asia',
  'North America',
  'South America',
  'Africa',
  'Oceania'
];

const DestinationsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');

  const filteredDestinations = allDestinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === 'All Regions' || destination.region === selectedRegion;
    
    return matchesSearch && matchesRegion;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-900">
        <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2433467/pexels-photo-2433467.jpeg?auto=compress&cs=tinysrgb&h=1200')] bg-cover bg-center"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Explore Destinations</h1>
          <p className="text-xl max-w-2xl mx-auto mb-12 text-gray-200 animate-slide-up">
            Discover unique itineraries for hundreds of destinations around the world
          </p>
          
          <div className="max-w-xl mx-auto relative animate-slide-up">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search destinations or countries..."
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center space-x-4 overflow-x-auto py-2 w-full md:w-auto">
              {regions.map((region) => (
                <button
                  key={region}
                  className={`px-4 py-2 rounded-full whitespace-nowrap ${
                    selectedRegion === region
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedRegion(region)}
                >
                  {region}
                </button>
              ))}
            </div>
            
            <div className="mt-4 md:mt-0 w-full md:w-auto">
              <span className="text-gray-600">
                {filteredDestinations.length} {filteredDestinations.length === 1 ? 'destination' : 'destinations'} found
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold mb-4">No destinations found</h3>
              <p className="text-gray-600 mb-8">
                We couldn't find any destinations matching your criteria. Try adjusting your filters.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedRegion('All Regions');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default DestinationsPage;