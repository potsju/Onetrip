import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Star } from 'lucide-react';
import { Destination } from '../../types/destination';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover-scale">
      <div className="relative">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full py-1 px-3 flex items-center shadow-sm">
          <Star size={16} className="text-yellow-400 mr-1" fill="currentColor" />
          <span className="font-medium text-sm">{destination.rating}</span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <MapPin size={14} className="mr-1" />
          <span>{destination.country}</span>
          <span className="mx-2">•</span>
          <Calendar size={14} className="mr-1" />
          <span>{destination.idealDuration}</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{destination.description}</p>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-sm text-gray-500">From</span>
            <div className="text-primary-600 font-semibold">${destination.basePricePerDay}/day</div>
          </div>
          
          <Link
            to={`/generator?destination=${encodeURIComponent(destination.name)}`}
            className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
          >
            Create Itinerary
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;