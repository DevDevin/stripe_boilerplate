const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_live_ZtwLPGkNl3oRR1BV1Zp6cQyB'
    : 'sk_test_PRK7WQHXJVYWJLWozP5IUWg9';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
