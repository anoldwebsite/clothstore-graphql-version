import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const CENTS_IN_USD = 100;

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * CENTS_IN_USD;//Stripe expects payments in cents.
    const publishablekey = 'pk_test_uFIIiiIh2Z7ikYM7l81XqnEA00Zn6ko5hK';

    const onToken = token => {
        alert('Payment Successfull! Stripe token generated!')
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Clothes for U'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        />
    );
};
export default StripeCheckoutButton;