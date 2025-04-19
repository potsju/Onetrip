import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Testimonial } from '../types/review';
import { testimonials } from '../data/reviewsData';

interface ReviewsContextType {
  reviews: Testimonial[];
  addReview: (review: Omit<Testimonial, 'id'>) => void;
}

const ReviewsContext = createContext<ReviewsContextType | undefined>(undefined);

export const ReviewsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [reviews, setReviews] = useState<Testimonial[]>(testimonials);

  const addReview = (newReview: Omit<Testimonial, 'id'>) => {
    const reviewWithId: Testimonial = {
      ...newReview,
      id: `rev${Date.now()}`,
    };
    setReviews(prevReviews => [reviewWithId, ...prevReviews]);
  };

  return (
    <ReviewsContext.Provider value={{ reviews, addReview }}>
      {children}
    </ReviewsContext.Provider>
  );
};

export const useReviews = () => {
  const context = useContext(ReviewsContext);
  if (context === undefined) {
    throw new Error('useReviews must be used within a ReviewsProvider');
  }
  return context;
}; 