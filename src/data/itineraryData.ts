import { Itinerary } from '../types/itinerary';

export const demoItinerary: Itinerary = {
  id: 'demo-1',
  title: '5-Day Magical Paris Adventure',
  destination: 'Paris, France',
  description: 'Experience the romance, culture, and beauty of Paris in this perfectly balanced 5-day itinerary. From iconic landmarks to hidden gems, this trip combines must-see attractions with authentic local experiences.',
  coverImage: 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&h=1200',
  travelStyle: 'Balanced',
  valueRating: 8,
  days: [
    {
      day: 1,
      title: 'Iconic Paris Introduction',
      description: 'Start your Paris adventure with the city\'s most iconic landmarks and a relaxing Seine river cruise.',
      activities: [
        {
          time: '09:00 AM',
          title: 'Eiffel Tower Visit',
          description: 'Beat the crowds with an early morning visit to the Eiffel Tower. Consider booking skip-the-line tickets in advance to save time.',
          cost: 40
        },
        {
          time: '12:00 PM',
          title: 'Lunch at Café Constant',
          description: 'Enjoy a classic French lunch at this beloved bistro near the Eiffel Tower, known for its authentic cuisine at reasonable prices.',
          cost: 25
        },
        {
          time: '02:00 PM',
          title: 'Arc de Triomphe & Champs-Élysées',
          description: 'Visit the Arc de Triomphe (climb to the top for panoramic views) and then stroll down the famous Champs-Élysées avenue.',
          cost: 15
        },
        {
          time: '04:30 PM',
          title: 'Tuileries Garden Stroll',
          description: 'Walk through the beautiful Tuileries Garden, stopping to relax by the fountains and enjoying the sculptures throughout the park.',
          cost: 0
        },
        {
          time: '06:30 PM',
          title: 'Seine River Dinner Cruise',
          description: 'Experience Paris from the water with a scenic dinner cruise along the Seine River. Watch the city lights come alive as you enjoy French cuisine.',
          cost: 85
        }
      ],
      accommodation: 'Hotel Bastille Speria (Left Bank) - Standard room with breakfast included'
    },
    {
      day: 2,
      title: 'Museums & Montmartre',
      description: 'Immerse yourself in art at the Louvre and explore the charming hilltop neighborhood of Montmartre.',
      activities: [
        {
          time: '08:30 AM',
          title: 'Early Access Louvre Museum',
          description: 'Get an early start at the world\'s most visited museum. Focus on key works like the Mona Lisa, Venus de Milo, and Winged Victory to avoid museum fatigue.',
          cost: 20
        },
        {
          time: '12:30 PM',
          title: 'Lunch at Café Marly',
          description: 'Enjoy lunch with a view of the Louvre Pyramid at this elegant café located inside the museum complex.',
          cost: 30
        },
        {
          time: '02:30 PM',
          title: 'Montmartre Walking Tour',
          description: 'Explore the artistic neighborhood of Montmartre, visiting Sacré-Cœur Basilica, Place du Tertre, and the famous Moulin Rouge.',
          cost: 15
        },
        {
          time: '05:30 PM',
          title: 'Wine Tasting Experience',
          description: 'Participate in a wine tasting session at a local caviste, learning about French wine regions and varieties.',
          cost: 45
        },
        {
          time: '08:00 PM',
          title: 'Dinner at La Maison Rose',
          description: 'Dine at this picturesque pink restaurant, a favorite spot of artists throughout Paris\'s history.',
          cost: 40
        }
      ],
      accommodation: 'Hotel Bastille Speria (Left Bank) - Standard room with breakfast included'
    },
    {
      day: 3,
      title: 'Medieval Paris & The Islands',
      description: 'Discover the historic heart of Paris on the islands and in the Latin Quarter, exploring medieval architecture and charming streets.',
      activities: [
        {
          time: '09:00 AM',
          title: 'Notre-Dame Cathedral & Île de la Cité',
          description: 'Visit the exterior of Notre-Dame (under reconstruction) and explore Île de la Cité, including Sainte-Chapelle with its stunning stained glass.',
          cost: 12
        },
        {
          time: '11:30 AM',
          title: 'Île Saint-Louis Exploration',
          description: 'Wander through the charming streets of Île Saint-Louis and stop at Berthillon for their famous ice cream.',
          cost: 8
        },
        {
          time: '01:00 PM',
          title: 'Lunch at Au Petit Châlet',
          description: 'Enjoy traditional French dishes at this cozy restaurant in the Latin Quarter.',
          cost: 22
        },
        {
          time: '03:00 PM',
          title: 'Latin Quarter Walking Tour',
          description: 'Explore the historic Latin Quarter, visiting the Panthéon, Luxembourg Gardens, and the medieval streets around Sorbonne University.',
          cost: 0
        },
        {
          time: '06:00 PM',
          title: 'Shakespeare and Company Bookstore',
          description: 'Visit the famous English-language bookstore, a Parisian institution with a fascinating history.',
          cost: 0
        },
        {
          time: '08:00 PM',
          title: 'Dinner Cruise on Canal Saint-Martin',
          description: 'Experience a different side of Paris with a dinner cruise along the picturesque Canal Saint-Martin.',
          cost: 65
        }
      ],
      accommodation: 'Hotel Bastille Speria (Left Bank) - Standard room with breakfast included'
    },
    {
      day: 4,
      title: 'Versailles Day Trip',
      description: 'Take a day trip to the magnificent Palace of Versailles, exploring the opulent royal residence and its gardens.',
      activities: [
        {
          time: '08:00 AM',
          title: 'Train to Versailles',
          description: 'Take the RER C train from Paris to Versailles Château - Rive Gauche station.',
          cost: 8
        },
        {
          time: '09:30 AM',
          title: 'Palace of Versailles Tour',
          description: 'Explore the opulent State Apartments, Hall of Mirrors, and Royal Chapel with an audio guide or guided tour.',
          cost: 22
        },
        {
          time: '12:30 PM',
          title: 'Lunch at La Flottille',
          description: 'Enjoy lunch at this restaurant located by the Grand Canal in the palace gardens.',
          cost: 25
        },
        {
          time: '02:00 PM',
          title: 'Gardens and Fountains',
          description: 'Explore the vast gardens, fountains, and Marie Antoinette\'s Estate. Consider renting a bike or golf cart for easier navigation.',
          cost: 12
        },
        {
          time: '05:30 PM',
          title: 'Return to Paris',
          description: 'Take the train back to Paris.',
          cost: 8
        },
        {
          time: '07:30 PM',
          title: 'Dinner at Le Comptoir du Relais',
          description: 'Enjoy a relaxed dinner at this popular bistro in Saint-Germain-des-Prés.',
          cost: 35
        }
      ],
      accommodation: 'Hotel Bastille Speria (Left Bank) - Standard room with breakfast included'
    },
    {
      day: 5,
      title: 'Hidden Gems & Farewell',
      description: 'Discover some of Paris\'s lesser-known treasures and end your trip with a spectacular view of the city.',
      activities: [
        {
          time: '09:00 AM',
          title: 'Musée d\'Orsay Visit',
          description: 'Explore this magnificent museum housed in a former railway station, home to an impressive collection of Impressionist and Post-Impressionist masterpieces.',
          cost: 16
        },
        {
          time: '12:00 PM',
          title: 'Lunch at Café de Flore',
          description: 'Dine at this historic café, once a favorite hangout of intellectuals and artists like Picasso and Hemingway.',
          cost: 30
        },
        {
          time: '02:00 PM',
          title: 'Le Marais Neighborhood Exploration',
          description: 'Wander through the trendy Marais district, visiting the Place des Vosges, quirky shops, and art galleries.',
          cost: 0
        },
        {
          time: '04:30 PM',
          title: 'Père Lachaise Cemetery',
          description: 'Visit this famous cemetery, the final resting place of many notable figures including Oscar Wilde, Jim Morrison, and Édith Piaf.',
          cost: 0
        },
        {
          time: '07:00 PM',
          title: 'Farewell Dinner at Le Jules Verne',
          description: 'Enjoy a special farewell dinner at this Michelin-starred restaurant located on the second floor of the Eiffel Tower, offering spectacular views of Paris.',
          cost: 150
        },
        {
          time: '10:00 PM',
          title: 'Montparnasse Tower Night View',
          description: 'End your trip with a nighttime visit to the observation deck of Montparnasse Tower, offering one of the best panoramic views of Paris, including the illuminated Eiffel Tower.',
          cost: 18
        }
      ],
      accommodation: 'Hotel Bastille Speria (Left Bank) - Standard room with breakfast included'
    }
  ],
  costs: {
    accommodation: 1200,
    food: 800,
    transportation: 250,
    activities: 650
  },
  costEfficiency: {
    valueForMoney: 8,
    costVsSimilar: 7,
    seasonalPricing: 6,
    savingTips: [
      'Visit museums on the first Sunday of the month for free entry',
      'Use a Navigo Découverte weekly transit pass instead of individual tickets',
      'Consider the Paris Museum Pass if visiting multiple attractions',
      'Book accommodations in the 11th or 12th arrondissements for better rates',
      'Look for "menu fixe" lunch specials at restaurants for better value'
    ],
    summary: 'This Paris itinerary offers good value for money, with a balanced mix of splurge experiences (like the Eiffel Tower dinner) and cost-effective activities. Traveling during shoulder season (April-May or September-October) would improve the cost efficiency by approximately 15-20% due to lower accommodation rates.'
  },
  highlights: [
    'Skip-the-line access to the Eiffel Tower with panoramic views of Paris',
    'Guided tour of the Louvre Museum\'s masterpieces',
    'Exploration of charming Montmartre neighborhood',
    'Day trip to the magnificent Palace of Versailles',
    'Seine River dinner cruise with views of illuminated monuments'
  ],
  bestTimeToVisit: 'April to June or September to October',
  currency: 'Euro (€)',
  language: 'French',
  visaRequirements: 'Visa-free for US citizens for stays up to 90 days',
  included: [
    'Day-by-day detailed itinerary',
    'Skip-the-line tickets for major attractions',
    'Restaurant recommendations with price ranges',
    'Public transportation guidance',
    'Interactive map with all locations',
    'Budget optimization recommendations'
  ]
};