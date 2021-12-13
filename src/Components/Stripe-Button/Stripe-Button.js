import React from 'react'
import StripeCheckout from 'react-stripe-checkout'



const StripeCheckoutButton =({ price })=> {
    const priceForStripe = price *100;
    const publishableKey='pk_test_51K6EksCK0qDFjEEOHzlwjCtHETyEKrhyeGleORCzr6gSKBjEDwflW51G5zNIi4oEjMCH3C1CuKeY2wJFG6dltjBW00tdbhhKYq';
    
    const onToken =(token)=>{
        console.log(token)
        alert('Pament Successful')

    }

    return (
        <StripeCheckout 
            label = 'Pay Now'
            name='Downtown AutoPlex LLC'
            billingAddress
            shippingAddress
            description ={`Your Total is: $${ price }`}
            amount={priceForStripe}
            panelLabel='Pay Now!'           

            token={onToken}
            stripeKey={publishableKey}
            
            
        /> 
    )
}

export default StripeCheckoutButton


