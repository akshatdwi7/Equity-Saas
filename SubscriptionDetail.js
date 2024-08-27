import React, { useEffect } from 'react';
import StockChart from './StockChart';

const SubscriptionDetail = ({ subscription, goBack }) => {
    useEffect(() => {
        $('.subscription-detail').hide().slideDown(600);
    }, []);

    return (
        <div className="subscription-detail">
            <button className="btn btn-secondary mb-3" onClick={() => {
                $('.subscription-detail').slideUp(600, goBack);
            }}>
                Back to Plans
            </button>
            <h2>{subscription.title} Plan</h2>
            <p className="price">${subscription.price}/month</p>
            <p>{subscription.detail}</p>
            <ul className="list-unstyled">
                {subscription.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <div className="chart-container">
                <StockChart />
            </div>
        </div>
    );
};

export default SubscriptionDetail;