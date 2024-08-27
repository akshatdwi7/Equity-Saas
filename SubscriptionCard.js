import React from 'react';

const SubscriptionCard = ({ title, price, features, description, onClick }) => (
    <>
        <div className="card subscription-card" data-toggle="modal" data-target={`#${title}Modal`} onClick={onClick}>
            <div className="card-body">
                <h5 className="card-title">{title} Plan</h5>
                <h6 className="card-price">${price}/month</h6>
                <p className="card-text">{description}</p>
                <ul className="list-unstyled">
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <button className="btn btn-primary btn-block">Learn More</button>
            </div>
        </div>

        {/* Modal for Detailed Information */}
        <div className="modal fade" id={`${title}Modal`} tabIndex="-1" aria-labelledby={`${title}ModalLabel`} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={`${title}ModalLabel`}>{title} Plan Details</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>{description}</p>
                        <ul className="list-unstyled">
                            {features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                        <p>More detailed information about the {title} plan can be displayed here.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-success">Subscribe Now</button>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default SubscriptionCard;