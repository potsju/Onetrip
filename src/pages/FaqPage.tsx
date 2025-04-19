import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { faqData, FaqCategory } from '../data/faqData';

const FaqPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const filteredFaqs = searchTerm.trim() === ''
    ? faqData
    : faqData.map(category => ({
        ...category,
        questions: category.questions.filter(q => 
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(category => category.questions.length > 0);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-900">
        <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&h=1200')] bg-cover bg-center"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Frequently Asked Questions</h1>
          <p className="text-xl max-w-2xl mx-auto mb-12 text-gray-200 animate-slide-up">
            Find answers to the most common questions about our itinerary planning service
          </p>
          
          <div className="max-w-xl mx-auto relative animate-slide-up">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search questions..."
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              className={`px-4 py-2 rounded-full ${
                activeCategory === null
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(null)}
            >
              All Categories
            </button>
            
            {faqData.map((category) => (
              <button
                key={category.category}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  activeCategory === category.category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category.category)}
              >
                {category.category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {filteredFaqs
              .filter(category => activeCategory === null || category.category === activeCategory)
              .map((category) => (
                category.questions.length > 0 && (
                  <div key={category.category} className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                    <div className="divide-y divide-gray-200 bg-white rounded-xl shadow-sm overflow-hidden">
                      {category.questions.map((item, index) => (
                        <div key={index} className="overflow-hidden">
                          <button
                            className="flex justify-between items-center w-full p-6 text-left"
                            onClick={() => toggleItem(`${category.category}-${index}`)}
                          >
                            <h3 className="text-lg font-semibold pr-8">{item.question}</h3>
                            <span className="flex-shrink-0">
                              {openItems[`${category.category}-${index}`] ? (
                                <ChevronUp className="h-5 w-5 text-gray-500" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-gray-500" />
                              )}
                            </span>
                          </button>
                          <div
                            className={`px-6 pb-6 transition-all duration-300 ${
                              openItems[`${category.category}-${index}`]
                                ? 'max-h-96 opacity-100'
                                : 'max-h-0 opacity-0'
                            }`}
                          >
                            <p className="text-gray-600">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              ))}

            {filteredFaqs.length === 0 || (activeCategory !== null && filteredFaqs.find(c => c.category === activeCategory)?.questions.length === 0) && (
              <div className="text-center py-20">
                <h3 className="text-2xl font-semibold mb-4">No FAQs found</h3>
                <p className="text-gray-600 mb-8">
                  We couldn't find any questions matching your search. Try a different search term or category.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory(null);
                  }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-600">
            If you couldn't find the answer to your question, feel free to contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-primary">
              Contact Support
            </Link>
            <Link to="/generator" className="btn btn-outline">
              Try The Generator
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqPage;