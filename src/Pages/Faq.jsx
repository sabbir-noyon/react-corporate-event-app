import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'Question: What is your company all about?',
      answer: 'Answer: Our company specializes in corporate event planning and management services.'
    },
    {
      question: 'Question: How can I request a quote for an event?',
      answer: 'Answer: You can request a quote by filling out the contact form on our website.'
    },
    {
      question: 'Question: Do you provide custom event themes?',
      answer: 'Answer: Yes, we offer a range of custom event themes tailored to your needs.'
    },
    {
      question: 'Question: What types of events do you organize?',
      answer: 'Answer: We organize a wide range of corporate events, including conferences, seminars, and team-building activities.'
    },
    {
      question: 'Question: Can you handle large-scale events?',
      answer: 'Answer: Absolutely! We have experience in managing events of all sizes.'
    },
    {
      question: 'Question: How do I get in touch with your team?',
      answer: 'Answer: You can contact us through our website or by phone. Our contact information is available on the Contact page.'
    }
  ];

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="max-w-xl mx-auto mb-14 lg:mb-0">
      <h2 className=" text-3xl md:text-4xl mt-10 md:mt-14 lg:mt-24 mb-10 lg:mb-4   lg:text-4xl font-bold text-center   text-[#FE3E01]">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-gradient-to-r from-[#333] via-[#555] to-[#333] rounded-lg shadow-md text-white">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-4 focus:outline-none"
            >
              <span className="font-semibold text-xl">{faq.question}</span>
              <span className="text-[white]">
                {activeIndex === index ? '-' : '+'}
              </span>
            </button>
            {activeIndex === index && (
              <div className="p-4 border-t">
                <p className="text-white text-lg font-medium">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

