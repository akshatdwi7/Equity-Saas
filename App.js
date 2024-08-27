import React, { useState, useEffect } from 'react';
import Header from './header';
import Footer from './Footer';
import SubscriptionCard from './SubscriptionCard';
import SubscriptionDetail from './SubscriptionDetail';

const App = () => {
    const [selectedSubscription, setSelectedSubscription] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000); // Simulate loading delay
    }, []);

    const subscriptions = [
        {
            title: "Silver",
            price: 19.99,
            description: "Get essential stock tips and advice.",
            features: ["Expert Advice", "Tips from Top Players", "No Ads"],
            detail: "The Silver plan is designed for beginners and includes essential tools to kickstart your trading journey."
        },
        {
            title: "Gold",
            price: 49.99,
            description: "Advanced trading tools and mentorship.",
            features: ["Everything in Silver", "Real-Time Interactions", "Priority Support"],
            detail: "The Gold plan offers more in-depth features including priority support and real-time mentor interactions."
        },
        {
            title: "Platinum",
            price: 99.99,
            description: "Exclusive content and one-on-one mentorship.",
            features: ["Everything in Gold", "Exclusive Content", "One-on-One Mentorship"],
            detail: "The Platinum plan is for advanced traders, offering personalized mentorship and exclusive content."
        },
    ];

    const handleCardClick = (subscription) => {
        setSelectedSubscription(subscription);
    };

    const goBack = () => {
        setSelectedSubscription(null);
    };

    return (
        <div>
            <Header />
            <main className="container">
                {loading ? (
                    <div className="loading-spinner text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                ) : selectedSubscription ? (
                    <SubscriptionDetail subscription={selectedSubscription} goBack={goBack} />
                ) : (
                    <div className="subscription-container">
                        <h1 className="text-center">Choose Your Subscription</h1>
                        <p className="text-center">Get the best tips, advice, and mentorship in stock trading.</p>
                        <div className="row">
                            {subscriptions.map((subscription, index) => (
                                <div className="col-md-4" key={index}>
                                    <SubscriptionCard
                                        title={subscription.title}
                                        price={subscription.price}
                                        features={subscription.features}
                                        description={subscription.description}
                                        onClick={() => handleCardClick(subscription)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default App;