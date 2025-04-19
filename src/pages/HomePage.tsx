import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Globe, DollarSign, Award, Users } from 'lucide-react';
import DestinationCard from '../components/destination/DestinationCard';
import TestimonialCard from '../components/reviews/TestimonialCard';
import FeatureCard from '../components/common/FeatureCard';
import { topDestinations } from '../data/destinationsData';
import { testimonials } from '../data/reviewsData';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&h=1200"
            alt="Travel destination"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40"></div>
        </div>

        <div className="container relative z-10 text-center text-white px-4">
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Plan your perfect trip<br />in seconds, not hours
          </h1>
          
          <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-200 animate-slide-up delay-200">
            Go from concept to printed itinerary with just a few clicks. Simply choose your budget, destination, and trip length to revel in the simplicity of a stress-free vacation, all planned out for you.
          </p>
          
          <Link to="/generator" className="btn btn-accent inline-flex items-center animate-slide-up delay-300">
            <Zap size={18} className="mr-2" />
            Try OneTrip
          </Link>

          <div className="mt-16 flex flex-wrap justify-center gap-2 items-center animate-slide-up delay-500">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map(index => (
                <img 
                  key={index}
                  src={`https://images.pexels.com/photos/${1000000 + index}/pexels-photo-${1000000 + index}.jpeg?auto=compress&cs=tinysrgb&h=100`} 
                  alt="Customer" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map(index => (
                  <span key={index}>★</span>
                ))}
              </div>
              <span className="ml-2 font-semibold">273+ adventures planned</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Onetrip?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make trip planning effortless with smart technology that understands your travel style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Globe className="text-primary-600" size={30} />}
              title="Global Destinations"
              description="Access itineraries for 500+ destinations worldwide, from popular cities to hidden gems."
            />
            
            <FeatureCard 
              icon={<DollarSign className="text-primary-600" size={30} />}
              title="Budget Optimization"
              description="Get the most value from your travel budget with cost-effective suggestions."
            />
            
            <FeatureCard 
              icon={<Award className="text-primary-600" size={30} />}
              title="Local Expertise"
              description="Benefit from local insights and off-the-beaten-path recommendations."
            />
            
            <FeatureCard 
              icon={<Users className="text-primary-600" size={30} />}
              title="Personalized Plans"
              description="Customize your itinerary based on interests, pace, and travel style."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create your perfect itinerary in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-2xl font-bold text-primary-600 mx-auto mb-6">1</div>
              <h3 className="text-xl font-semibold mb-3">Select Your Destination</h3>
              <p className="text-gray-600">
                Choose from hundreds of destinations worldwide or get recommendations based on your preferences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-2xl font-bold text-primary-600 mx-auto mb-6">2</div>
              <h3 className="text-xl font-semibold mb-3">Set Your Parameters</h3>
              <p className="text-gray-600">
                Input your travel dates, budget, interests, and preferred pace for a customized experience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-2xl font-bold text-primary-600 mx-auto mb-6">3</div>
              <h3 className="text-xl font-semibold mb-3">Get Your Itinerary</h3>
              <p className="text-gray-600">
                Receive a detailed day-by-day plan with activities, accommodations, and transportation options.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/generator" className="btn btn-primary">
              Create Your Itinerary
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                Explore our most requested locations and their custom itineraries
              </p>
            </div>
            <Link to="/destinations" className="mt-4 md:mt-0 text-primary-600 font-semibold hover:text-primary-700 transition-colors flex items-center">
              View all destinations
              <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topDestinations.slice(0, 6).map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Travelers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from travelers who planned their trips with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/reviews" className="btn btn-outline">
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Plan Your Dream Trip?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Create your personalized itinerary in minutes and start your adventure with confidence.
          </p>
          <Link to="/generator" className="btn bg-white text-primary-600 hover:bg-gray-100 hover:text-primary-700">
            Create Free Itinerary
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;