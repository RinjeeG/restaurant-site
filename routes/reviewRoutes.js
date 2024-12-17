import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const { GOOGLE_API_URL, GOOGLE_API_KEY, PLACE_ID } = process.env;

        if (!GOOGLE_API_URL || !GOOGLE_API_KEY || !PLACE_ID) {
            return res.status(500).json({ error: 'Missing required environment variables.' });
        }

        const url = `${GOOGLE_API_URL}?place_id=${PLACE_ID}&fields=name,rating,reviews&key=${GOOGLE_API_KEY}`;

        const response = await fetch(url);

        // Debug invalid responses
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            const text = await response.text();
            console.error('Non-JSON Response:', text);
            return res.status(500).json({ error: 'Received invalid response from API.' });
        }

        if (!response.ok) {
            console.error(`API call failed with status ${response.status}: ${response.statusText}`);
            const errorText = await response.text();
            console.error('API Error Text:', errorText);
            return res.status(response.status).json({ error: 'Failed to fetch reviews' });
        }

        const data = await response.json();

        const reviews = data.result?.reviews || [];
        if (!reviews.length) {
            console.log('No reviews found for this place.');
            return res.json({ message: 'No reviews found or reviews unavailable.' });
        }

        const bestReviews = reviews.filter((review) => review.rating === 5);
        res.json(bestReviews.slice(0, 5));
    } catch (error) {
        console.error('Error fetching or processing reviews:', error.message);
        res.status(500).json({ error: 'Unable to fetch or process reviews.' });
    }
});
// router.get('/api/reviews', (req, res) => {
//     console.log('Received request to /api/reviews');
//     res.json([
//         { author_name: "John Doe", rating: 5, text: "Excellent place!" },
//         { author_name: "Jane Smith", rating: 4, text: "Very good experience!" }
//     ]);
// });


export default router;
