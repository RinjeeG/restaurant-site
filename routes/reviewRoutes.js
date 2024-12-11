const express = require('express');
const https = require('https');
const router = express.Router();
require('dotenv').config(); // Load .env variables

// API route to get top reviews
router.get('/reviews', (req, res) => {
    const { GOOGLE_API_URL, GOOGLE_API_KEY, PLACE_ID } = process.env;

    const url = `${GOOGLE_API_URL}?place_id=${PLACE_ID}&fields=reviews&key=${GOOGLE_API_KEY}`;

    console.log('Fetching from URL:', url); // Debugging URL construction

    https.get(url, (apiResponse) => {
        let data = '';

        apiResponse.on('data', (chunk) => {
            data += chunk;
        });

        apiResponse.on('end', () => {
            try {
                const parsedData = JSON.parse(data);
                console.log('Google API Response:', parsedData); // Log the entire response

                const reviews = parsedData.result?.reviews || [];
                if (reviews.length === 0) {
                    console.log('No reviews found for this place.');
                    return res.json({ message: 'No reviews available for this place.' });
                }

                const bestReviews = reviews.filter((review) => review.rating === 5);
                res.json(bestReviews.slice(0, 5));
            } catch (error) {
                console.error('Error parsing API response:', error.message);
                res.status(500).json({ error: 'Unable to process API response' });
            }
        });
    }).on('error', (error) => {
        console.error('Error fetching reviews:', error.message);
        res.status(500).json({ error: 'Unable to fetch reviews' });
    });
});

module.exports = router;
