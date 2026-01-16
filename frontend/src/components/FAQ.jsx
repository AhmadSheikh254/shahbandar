import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
    const faqs = [
        {
            question: 'Is creating a SellAuth store free?',
            answer: 'Yes, creating a SellAuth store is completely free. We only charge a small transaction fee when you make a sale on the free plan.',
        },
        {
            question: 'What payment processors do you support?',
            answer: 'We support Stripe, PayPal, and various cryptocurrency payments to ensure you can accept payments from anywhere.',
        },
        {
            question: 'What are the benefits of the Business plan?',
            answer: 'The Business plan offers lower transaction fees, custom domain support, advanced analytics, and priority customer support.',
        },
        {
            question: 'Can I sell physical products?',
            answer: 'Currently, SellAuth is optimized for digital products such as software, keys, accounts, and downloads. Physical product support is on our roadmap.',
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="bg-background py-24">
            <div className="py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-6">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-foreground">Frequently Asked Questions</h2>
                <p className="mb-8 font-light text-muted-foreground lg:mb-16 sm:text-xl">
                    Have questions? We have answers.
                </p>
                <div className="space-y-4 text-left">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-border pb-4">
                            <button
                                className="flex items-center justify-between w-full p-5 font-medium text-left text-foreground bg-card/30 rounded-xl hover:bg-card/50 focus:ring-4 focus:ring-secondary transition-all"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span>{faq.question}</span>
                                {openIndex === index ? <ChevronUp className="w-5 h-5 text-brand-500" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                <div className="p-5 border border-border rounded-xl bg-card/20 text-muted-foreground">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
