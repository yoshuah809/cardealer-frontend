import React from 'react'
import StripeCheckout from 'react-stripe-checkout'



const StripeCheckoutButton =(props)=> {
    const priceForStripe = props.price *100;
    const publishableKey='pk_test_51K6EksCK0qDFjEEOHzlwjCtHETyEKrhyeGleORCzr6gSKBjEDwflW51G5zNIi4oEjMCH3C1CuKeY2wJFG6dltjBW00tdbhhKYq';
    
    const onToken =(token)=>{
        console.log(token)
        alert('Payment Successful')
        props.paymentHandler()

    }

    return (
        <StripeCheckout 
            label = 'Pay Now'
            name='Downtown AutoPlex LLC'
            billingAddress
            shippingAddress
            description ={`Your Total is: $${ props.price }`}
            amount={priceForStripe}
            panelLabel='Pay Now!'  
            data-image='https://stripe.com/img/documentation/checkout/marketplace.png'         

            token={onToken}
            stripeKey={publishableKey}
            
            
        /> 
    )
}

export default StripeCheckoutButton


