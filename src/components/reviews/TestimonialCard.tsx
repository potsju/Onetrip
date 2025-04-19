import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../../types/review';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const renderStars = (rating: number) => {
    return (
      <div className="flex text-yellow-400">
        {[1, 2, 3, 4, 5].map((index) => (
          <Star
            key={index}
            size={16}
            fill={index <= rating ? "currentColor" : "none"}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full mr-3 object-cover"
          />
          <div>
            <h3 className="font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.destination}</p>
          </div>
        </div>
        {renderStars(testimonial.rating)}
      </div>
      
      <blockquote className="text-gray-700 mb-4">
        "{testimonial.comment}"
      </blockquote>
      
      <div className="text-sm text-gray-500">
        {testimonial.date} • {testimonial.tripType}
      </div>
    </div>
  );
};

export default TestimonialCard;