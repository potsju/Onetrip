import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, DollarSign, Clock, Users, ArrowRight } from 'lucide-react';
import { allDestinations } from '../data/destinationsData';

type FormStep = 'destination' | 'details' | 'preferences';
type TravelStyle = 'relaxed' | 'balanced' | 'intensive';
type Budget = 'budget' | 'moderate' | 'luxury';

interface FormData {
  destination: string;
  startDate: string;
  endDate: string;
  travelers: number;
  budget: Budget;
  travelStyle: TravelStyle;
  interests: string[];
}

const availableInterests = [
  'Beach', 'Mountains', 'City', 'Culture', 'History', 
  'Food', 'Shopping', 'Adventure', 'Nature', 'Nightlife',
  'Relaxation', 'Art', 'Music', 'Wildlife', 'Photography'
];

const ItineraryGeneratorPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<FormStep>('destination');
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState<FormData>({
    destination: '',
    startDate: '',
    endDate: '',
    travelers: 2,
    budget: 'moderate',
    travelStyle: 'balanced',
    interests: []
  });
  const [isGenerating, setIsGenerating] = useState(false);

  const filteredDestinations = searchTerm.trim() === ''
    ? allDestinations
    : allDestinations.filter(dest =>
        dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.country.toLowerCase().includes(searchTerm.toLowerCase())
      );

  const handleSelectDestination = (destination: string) => {
    setFormData(prev => ({ ...prev, destination }));
    setCurrentStep('details');
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => {
      if (prev.interests.includes(interest)) {
        return { ...prev, interests: prev.interests.filter(i => i !== interest) };
      } else {
        return { ...prev, interests: [...prev.interests, interest] };
      }
    });
  };

  const handleNext = () => {
    if (currentStep === 'details') {
      setCurrentStep('preferences');
    }
  };

  const handleBack = () => {
    if (currentStep === 'details') {
      setCurrentStep('destination');
    } else if (currentStep === 'preferences') {
      setCurrentStep('details');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate API call/processing
    setTimeout(() => {
      setIsGenerating(false);
      navigate('/itinerary/demo-1'); // Navigate to the generated itinerary
    }, 2000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 bg-primary-900">
        <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&h=1200')] bg-cover bg-center"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Create Your Perfect Itinerary</h1>
          <p className="text-xl max-w-2xl mx-auto mb-6 text-gray-200 animate-slide-up">
            Plan your dream trip in minutes with our personalized itinerary generator
          </p>
        </div>
      </section>

      {/* Generator Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            {/* Progress Steps */}
            <div className="p-6 bg-gray-50 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep === 'destination' 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-primary-100 text-primary-600'
                  }`}>
                    1
                  </div>
                  <span className="ml-2 font-medium">Destination</span>
                </div>
                <div className="flex-1 mx-4 h-1 bg-gray-200">
                  <div className={`h-full bg-primary-600 transition-all duration-300 ${
                    currentStep === 'destination' ? 'w-0' : currentStep === 'details' ? 'w-1/2' : 'w-full'
                  }`}></div>
                </div>
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep === 'details' 
                      ? 'bg-primary-600 text-white' 
                      : currentStep === 'preferences'
                        ? 'bg-primary-100 text-primary-600'
                        : 'bg-gray-200 text-gray-500'
                  }`}>
                    2
                  </div>
                  <span className="ml-2 font-medium">Trip Details</span>
                </div>
                <div className="flex-1 mx-4 h-1 bg-gray-200">
                  <div className={`h-full bg-primary-600 transition-all duration-300 ${
                    currentStep === 'preferences' ? 'w-full' : 'w-0'
                  }`}></div>
                </div>
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep === 'preferences' 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    3
                  </div>
                  <span className="ml-2 font-medium">Preferences</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-8">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Destination */}
                {currentStep === 'destination' && (
                  <div className="animate-fade-in">
                    <h2 className="text-2xl font-bold mb-6">Where do you want to go?</h2>
                    
                    <div className="mb-6">
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="text"
                          placeholder="Search destinations..."
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                      {filteredDestinations.slice(0, 6).map((destination) => (
                        <div
                          key={destination.id}
                          className={`rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer relative ${
                            formData.destination === destination.name ? 'ring-2 ring-primary-500' : ''
                          }`}
                          onClick={() => handleSelectDestination(destination.name)}
                        >
                          <img
                            src={destination.image}
                            alt={destination.name}
                            className="w-full h-32 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-3">
                            <h3 className="text-white font-semibold">{destination.name}</h3>
                            <p className="text-white/80 text-sm">{destination.country}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {formData.destination && (
                      <div className="flex justify-center">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => setCurrentStep('details')}
                        >
                          Continue <ArrowRight size={16} className="ml-2" />
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 2: Trip Details */}
                {currentStep === 'details' && (
                  <div className="animate-fade-in">
                    <h2 className="text-2xl font-bold mb-6">Trip Details</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Trip Start Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                          <input
                            type="date"
                            name="startDate"
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            value={formData.startDate}
                            onChange={handleFormChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Trip End Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                          <input
                            type="date"
                            name="endDate"
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            value={formData.endDate}
                            onChange={handleFormChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Number of Travelers</label>
                        <div className="relative">
                          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                          <input
                            type="number"
                            name="travelers"
                            min="1"
                            max="20"
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            value={formData.travelers}
                            onChange={handleFormChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Budget Level</label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                          <select
                            name="budget"
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 appearance-none bg-white"
                            value={formData.budget}
                            onChange={handleFormChange}
                            required
                          >
                            <option value="budget">Budget</option>
                            <option value="moderate">Moderate</option>
                            <option value="luxury">Luxury</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between mt-8">
                      <button
                        type="button"
                        className="btn bg-gray-200 text-gray-800 hover:bg-gray-300"
                        onClick={handleBack}
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleNext}
                      >
                        Continue <ArrowRight size={16} className="ml-2" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Preferences */}
                {currentStep === 'preferences' && (
                  <div className="animate-fade-in">
                    <h2 className="text-2xl font-bold mb-6">Travel Preferences</h2>
                    
                    <div className="mb-8">
                      <label className="block text-gray-700 font-medium mb-2">Travel Style</label>
                      <div className="grid grid-cols-3 gap-4">
                        <div
                          className={`border rounded-lg p-4 text-center cursor-pointer transition-all ${
                            formData.travelStyle === 'relaxed' 
                              ? 'border-primary-500 bg-primary-50' 
                              : 'border-gray-300 hover:border-primary-300'
                          }`}
                          onClick={() => setFormData(prev => ({ ...prev, travelStyle: 'relaxed' }))}
                        >
                          <Clock size={30} className="mx-auto mb-2 text-primary-600" />
                          <h3 className="font-medium">Relaxed</h3>
                          <p className="text-xs text-gray-500 mt-1">Slow-paced, fewer activities</p>
                        </div>
                        
                        <div
                          className={`border rounded-lg p-4 text-center cursor-pointer transition-all ${
                            formData.travelStyle === 'balanced' 
                              ? 'border-primary-500 bg-primary-50' 
                              : 'border-gray-300 hover:border-primary-300'
                          }`}
                          onClick={() => setFormData(prev => ({ ...prev, travelStyle: 'balanced' }))}
                        >
                          <Clock size={30} className="mx-auto mb-2 text-primary-600" />
                          <h3 className="font-medium">Balanced</h3>
                          <p className="text-xs text-gray-500 mt-1">Mix of activities and rest</p>
                        </div>
                        
                        <div
                          className={`border rounded-lg p-4 text-center cursor-pointer transition-all ${
                            formData.travelStyle === 'intensive' 
                              ? 'border-primary-500 bg-primary-50' 
                              : 'border-gray-300 hover:border-primary-300'
                          }`}
                          onClick={() => setFormData(prev => ({ ...prev, travelStyle: 'intensive' }))}
                        >
                          <Clock size={30} className="mx-auto mb-2 text-primary-600" />
                          <h3 className="font-medium">Intensive</h3>
                          <p className="text-xs text-gray-500 mt-1">Fast-paced, many activities</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <label className="block text-gray-700 font-medium mb-2">Travel Interests (select up to 5)</label>
                      <div className="flex flex-wrap gap-3">
                        {availableInterests.map(interest => (
                          <button
                            key={interest}
                            type="button"
                            className={`px-4 py-2 rounded-full text-sm transition-colors ${
                              formData.interests.includes(interest)
                                ? 'bg-primary-600 text-white'
                                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                            }`}
                            onClick={() => handleInterestToggle(interest)}
                            disabled={!formData.interests.includes(interest) && formData.interests.length >= 5}
                          >
                            {interest}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between mt-8">
                      <button
                        type="button"
                        className="btn bg-gray-200 text-gray-800 hover:bg-gray-300"
                        onClick={handleBack}
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isGenerating}
                      >
                        {isGenerating ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Generating Itinerary...
                          </>
                        ) : (
                          'Generate Itinerary'
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What You'll Get</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our itinerary generator creates comprehensive travel plans tailored to your preferences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-xl">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Day-by-Day Schedule</h3>
              <p className="text-gray-600">
                A detailed daily plan with activities, attractions, and estimated times.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-xl">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Budget Breakdown</h3>
              <p className="text-gray-600">
                Estimated costs for accommodations, activities, transportation, and meals.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-xl">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interactive Maps</h3>
              <p className="text-gray-600">
                Maps showing your daily routes and points of interest for easy navigation.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-xl">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-primary-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customization</h3>
              <p className="text-gray-600">
                Ability to modify and personalize any aspect of your itinerary as needed.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-xl">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-primary-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Recommendations</h3>
              <p className="text-gray-600">
                Insider tips, hidden gems, and authentic experiences from local experts.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-xl">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-primary-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Shareable Format</h3>
              <p className="text-gray-600">
                Easy to download, print, or share your itinerary with travel companions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ItineraryGeneratorPage;