import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);

    // Fetch reviews from the backend
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('/api/reviews');
                if (!response.ok) {
                    throw new Error('Failed to fetch reviews');
                }
                const data = await response.json();
                setReviews(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchReviews();
    }, []);

    // Error handling
    if (error) {
        return (
            <div className="alert alert-danger text-center" role="alert">
                {error}
            </div>
        );
    }

    // Loading state
    if (!reviews.length) {
        return (
            <div className="text-center my-5">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    // Helper to render star ratings
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <i
                    key={i}
                    className={`bi bi-star${i < rating ? '-fill' : ''}`}
                    style={{ color: '#ffc107', marginRight: '2px' }}
                ></i>
            );
        }
        return stars;
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Top Customer Reviews</h2>
            <div className="row">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className={`col-md-6 mb-4 review-card fade-in`}
                        style={{ animationDelay: `${index * 0.3}s` }} // Delay each card
                    >
                        <div className="card shadow-sm h-100">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-2">
                                    <div className="me-3">
                                        <img
                                            src={`https://via.placeholder.com/50?text=${review.author_name.charAt(0)}`}
                                            alt={review.author_name}
                                            className="rounded-circle"
                                        />
                                    </div>
                                    <div>
                                        <h5 className="mb-0">{review.author_name}</h5>
                                        <div className="text-warning">{renderStars(review.rating)}</div>
                                    </div>
                                </div>
                                <p className="card-text">{review.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
