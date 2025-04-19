export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  category: string;
  questions: FaqItem[];
}

export const faqData: FaqCategory[] = [
  {
    category: 'Using the Generator',
    questions: [
      {
        question: 'How does the itinerary generator work?',
        answer: 'Our itinerary generator uses a combination of travel expert knowledge, local insights, and machine learning to create personalized travel plans. You input your destination, travel dates, budget level, and preferences, and our system generates a comprehensive day-by-day itinerary tailored to your needs.'
      },
      {
        question: 'Can I customize the generated itinerary?',
        answer: 'Absolutely! Once your itinerary is generated, you can customize every aspect of it. You can add or remove activities, adjust timings, change accommodations, and more. Your itinerary remains editable at any time before or during your trip.'
      },
      {
        question: 'How accurate are the cost estimates?',
        answer: 'Our cost estimates are based on current average prices and are updated regularly. They\'re intended to give you a realistic budget expectation, but actual costs may vary based on seasonality, availability, and your specific choices. We recommend using them as a general guideline rather than exact figures.'
      },
      {
        question: 'Can I generate itineraries for multiple destinations?',
        answer: 'Yes, you can generate separate itineraries for each destination on your trip and then combine them into a master itinerary. Alternatively, you can select a region and specify the multiple cities you want to visit, and our system will create a multi-destination itinerary with appropriate travel time between locations.'
      },
      {
        question: 'How far in advance should I generate my itinerary?',
        answer: 'We recommend generating your itinerary at least a few weeks before your trip to give you time to review and customize it. However, you can create an itinerary at any time, even last minute. For popular destinations during peak season, generating earlier gives you more time to secure reservations for recommended activities and accommodations.'
      }
    ]
  },
  {
    category: 'Account & Pricing',
    questions: [
      {
        question: 'Is it free to use the itinerary generator?',
        answer: 'We offer a free basic plan that allows you to create up to 3 itineraries per month with standard features. For more advanced features like budget optimization, offline access, and unlimited itineraries, we offer Premium and Pro subscription plans. You can view our pricing page for detailed information on each plan.'
      },
      {
        question: 'How do I upgrade or downgrade my subscription?',
        answer: 'You can change your subscription at any time from your account settings page. If you upgrade, the new features will be immediately available. If you downgrade, you\'ll continue to have access to your current plan\'s features until the end of your billing cycle, at which point your account will switch to the new plan.'
      },
      {
        question: 'Can I cancel my subscription at any time?',
        answer: 'Yes, you can cancel your subscription at any time through your account settings. After cancellation, you\'ll have access to your premium features until the end of your current billing period. Your account will then revert to the free plan, but you\'ll still have access to any itineraries you\'ve already created.'
      },
      {
        question: 'Do you offer refunds?',
        answer: 'We offer a 14-day money-back guarantee for all new Premium and Pro subscriptions. If you\'re not satisfied with our service within the first 14 days, contact our support team for a full refund. After this period, refunds are considered on a case-by-case basis.'
      }
    ]
  },
  {
    category: 'Destinations & Content',
    questions: [
      {
        question: 'How many destinations do you cover?',
        answer: 'We currently offer itineraries for over 500 destinations worldwide, covering major cities, popular vacation spots, and off-the-beaten-path locations. We\'re constantly adding new destinations to our database based on user requests and travel trends.'
      },
      {
        question: 'How up-to-date is your destination information?',
        answer: 'We strive to keep our destination information as current as possible. Our content team regularly updates details on attractions, opening hours, prices, and travel advisories. However, we always recommend verifying critical information directly with venues, especially for recent changes or seasonal variations.'
      },
      {
        question: 'Do you include COVID-19 or other safety information?',
        answer: 'Yes, we include relevant safety information for each destination, including any active travel advisories and general safety tips. For COVID-19 specific information, we provide links to official resources, but we recommend checking the latest requirements and restrictions before traveling as these can change frequently.'
      },
      {
        question: 'Can I suggest a destination to add?',
        answer: 'Absolutely! We welcome destination suggestions from our users. You can submit a destination request through the "Suggest Destination" form in your account dashboard. While we can\'t guarantee all suggestions will be added immediately, we prioritize frequently requested locations.'
      }
    ]
  },
  {
    category: 'Technical & Support',
    questions: [
      {
        question: 'Can I access my itinerary offline?',
        answer: 'Premium and Pro plan users can download their itineraries for offline access. You can export your itinerary as a PDF or use our mobile app to save it for offline viewing. Free plan users need an internet connection to access their itineraries.'
      },
      {
        question: 'How do I share my itinerary with my travel companions?',
        answer: 'You can share your itinerary in several ways. Use the "Share" button to send a viewable link to your companions (they don\'t need an account to view it), export it as a PDF to share via email, or use the "Collaborate" feature (Pro plan) to let others make edits and suggestions.'
      },
      {
        question: 'Is my personal information secure?',
        answer: 'Yes, we take data security very seriously. We use industry-standard encryption to protect your personal information and travel details. We never sell your data to third parties. You can review our privacy policy for detailed information on how we collect, use, and protect your data.'
      },
      {
        question: 'What if I need help with my itinerary?',
        answer: 'We offer several support options. Free users can access our help center and email support with a 48-hour response time. Premium users get email and chat support with faster response times. Pro users receive priority support including one-on-one consultation for complex itineraries.'
      },
      {
        question: 'Does the itinerary generator work on mobile devices?',
        answer: 'Yes, our website is fully responsive and works on all devices. Additionally, we offer mobile apps for iOS and Android that allow you to create and access your itineraries on the go, with additional features like offline access, real-time trip tracking, and location-based notifications.'
      }
    ]
  }
];