import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

type PricingPeriod = 'monthly' | 'yearly';

const PricingPage: React.FC = () => {
  const [period, setPeriod] = useState<PricingPeriod>('monthly');

  const pricingPlans = [
    {
      name: 'Basic',
      description: 'Perfect for occasional travelers',
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        'Up to 3 itineraries per month',
        'Basic destination information',
        'Standard itinerary templates',
        'Email support',
      ],
      notIncluded: [
        'Custom itinerary templates',
        'Budget optimization',
        'Offline access',
        'Priority support',
      ],
      cta: 'Get Started Free',
      popular: false,
    },
    {
      name: 'Premium',
      description: 'Ideal for frequent travelers',
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
      features: [
        'Unlimited itineraries',
        'Detailed destination guides',
        'Custom itinerary templates',
        'Budget optimization',
        'Travel expense tracking',
        'Email & chat support',
      ],
      notIncluded: [
        'Team collaboration',
        'Offline access',
      ],
      cta: 'Start Premium Plan',
      popular: true,
    },
    {
      name: 'Pro',
      description: 'For travel professionals',
      monthlyPrice: 19.99,
      yearlyPrice: 199.99,
      features: [
        'All Premium features',
        'Team collaboration',
        'Offline access',
        'White-label reports',
        'Custom branding',
        'API access',
        'Priority support',
      ],
      notIncluded: [],
      cta: 'Start Pro Plan',
      popular: false,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-900">
        <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&h=1200')] bg-cover bg-center"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Simple, Transparent Pricing</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-200 animate-slide-up">
            Choose the perfect plan for your travel planning needs
          </p>
          
          <div className="inline-flex items-center bg-primary-800/50 p-1 rounded-full animate-slide-up">
            <button
              onClick={() => setPeriod('monthly')}
              className={`px-6 py-2 rounded-full transition-all ${
                period === 'monthly' ? 'bg-white text-primary-600' : 'text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setPeriod('yearly')}
              className={`px-6 py-2 rounded-full transition-all ${
                period === 'yearly' ? 'bg-white text-primary-600' : 'text-white'
              }`}
            >
              Yearly <span className="text-xs font-medium ml-1 text-accent-300">Save 17%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden ${
                  plan.popular ? 'border-2 border-primary-500 md:scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary-500 text-white text-sm font-bold uppercase py-1 px-4 absolute top-6 right-0 transform -translate-y-1/2 rotate-45 origin-left">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold">
                      ${period === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-gray-600">
                      /{period === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  
                  <Link
                    to="/generator"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                      plan.popular 
                        ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                  
                  <div className="mt-8">
                    <h4 className="font-semibold mb-4 text-gray-900">What's included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check size={18} className="text-success-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {plan.notIncluded.length > 0 && (
                      <>
                        <h4 className="font-semibold mb-4 mt-6 text-gray-900">Not included:</h4>
                        <ul className="space-y-3">
                          {plan.notIncluded.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <X size={18} className="text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-500">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our pricing and plans
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            {pricingFAQs.map((faq, index) => (
              <div key={index} className="py-6">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Planning Your Trip Today</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Try our free plan to create your first itinerary, no credit card required.
          </p>
          <Link to="/generator" className="btn bg-white text-primary-600 hover:bg-gray-100 hover:text-primary-700">
            Get Started Free
          </Link>
        </div>
      </section>
    </>
  );
};

const pricingFAQs = [
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access until the end of your billing period."
  },
  {
    question: "How do I upgrade or downgrade my plan?",
    answer: "You can upgrade or downgrade your plan at any time from your account settings. If you upgrade, the new pricing will take effect immediately. If you downgrade, the new pricing will apply at the start of your next billing cycle."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied with our service within the first 14 days, contact our support team for a full refund."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express) and PayPal for subscription payments."
  },
  {
    question: "Can I share my account with others?",
    answer: "The Basic and Premium plans are for individual use only. If you need team collaboration features, please consider our Pro plan which supports multiple users."
  }
];

export default PricingPage;