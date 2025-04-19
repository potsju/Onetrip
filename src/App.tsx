import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import PricingPage from './pages/PricingPage';
import ReviewsPage from './pages/ReviewsPage';
import FaqPage from './pages/FaqPage';
import ItineraryGeneratorPage from './pages/ItineraryGeneratorPage';
import ItineraryViewPage from './pages/ItineraryViewPage';
import SubmitReviewPage from './pages/SubmitReviewPage';

// Components
import Layout from './components/layout/Layout';
import { ReviewsProvider } from './context/ReviewsContext';

function App() {
  return (
    <Router>
      <ReviewsProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/submit-review" element={<SubmitReviewPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/generator" element={<ItineraryGeneratorPage />} />
            <Route path="/itinerary/:id" element={<ItineraryViewPage />} />
          </Routes>
        </Layout>
      </ReviewsProvider>
    </Router>
  );
}

export default App;