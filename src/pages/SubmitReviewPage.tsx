import React from 'react';
import ReviewForm from '../components/reviews/ReviewForm';
import { useLocation } from 'react-router-dom';

const SubmitReviewPage: React.FC = () => {
  const location = useLocation();
  const { tripId, destination } = location.state || {};

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <ReviewForm tripId={tripId} destination={destination} />
      </div>
    </div>
  );
};

export default SubmitReviewPage; 