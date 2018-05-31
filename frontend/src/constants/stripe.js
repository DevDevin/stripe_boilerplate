const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_e6erI0zgaqyu1oN9qkEj1EwO'
  : 'pk_test_uJB1zvrolZgJEeqfntoGazrk';

export default STRIPE_PUBLISHABLE;
