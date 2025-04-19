import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import TestimonialCard from '../components/reviews/TestimonialCard';
import { useReviews } from '../context/ReviewsContext';

const ReviewsPage: React.FC = () => {
  const { reviews } = useReviews();
  const averageRating = reviews.reduce((sum, item) => sum + item.rating, 0) / reviews.length;
  
  const ratingCounts = [5, 4, 3, 2, 1].map(rating => {
    const count = reviews.filter(item => Math.floor(item.rating) === rating).length;
    const percentage = (count / reviews.length) * 100;
    return { rating, count, percentage };
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-900">
        <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&h=1200')] bg-cover bg-center"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Traveler Reviews</h1>
          <p className="text-xl max-w-2xl mx-auto mb-12 text-gray-200 animate-slide-up">
            See what our customers are saying about their experiences with our itineraries
          </p>
        </div>
      </section>

      {/* Rating Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
              <div className="text-center md:text-left">
                <div className="text-6xl font-bold text-gray-900 mb-2">{averageRating.toFixed(1)}</div>
                <div className="flex items-center justify-center md:justify-start text-yellow-400 mb-2">
                  {[1, 2, 3, 4, 5].map(index => (
                    <Star
                      key={index}
                      size={20}
                      fill={index <= Math.round(averageRating) ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <p className="text-gray-600">Based on {reviews.length} reviews</p>
              </div>
              
              <div className="flex-1 w-full">
                <div className="space-y-3 w-full">
                  {ratingCounts.map(({ rating, count, percentage }) => (
                    <div key={rating} className="flex items-center">
                      <div className="flex-shrink-0 w-12 text-gray-700">{rating} stars</div>
                      <div className="flex-1 mx-4 h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-yellow-400 rounded-full"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <div className="flex-shrink-0 w-12 text-right text-gray-600">{count}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Submit Review CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Share Your Experience</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-600">
            Have you used one of our itineraries? We'd love to hear about your experience!
          </p>
          <Link to="/submit-review" className="btn btn-primary">
            Submit a Review
          </Link>
        </div>
      </section>
    </>
  );
};

export default ReviewsPage;