import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);

    // Fetch reviews from the backend
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('/api/reviews'); // Call your backend route
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

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Top Customer Reviews</h2>
            {reviews.map((review, index) => (
                <div key={index} className="card mb-3 shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title">{review.author_name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{review.rating} / 5</h6>
                        <p className="card-text">"{review.text}"</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Reviews;
