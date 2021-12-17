import React from 'react'




function Affiliate({ history }) {

       
    const handleSubmit=()=>{
        
        history.push('/')
      
    }

    return (
        
       
            <form>
                <div>
                   
                    <h2><strong> Afiliate Services: </strong></h2>
                    <h2>For DealerShip Services please call 972-255-7895 Ext 0</h2>
                    <h2>For Repair Services please call 972-255-7895 Ext 211</h2>
                    <br></br>
                    <h2><strong>For Hauling to Miami: </strong></h2>
                    <h2><a href='www.americanautoshippping.com'>Visit websiste at americanautoshippping or call 877-930-7417</a></h2>
                    <h2><a href="www.montway.com">Visit websiste at  montway.com or call 833-720-3927</a></h2>
                    <h2><a href="www.autotransport360.com">Visit websiste at autotransport360.com or call 877-360-7342</a></h2>

                    <br></br>
                    <></>
                    <h2><strong> For Sea Shipping Services </strong></h2>
                    <></>
                    <h2><a href="www.searboardmarine.com">Visit website at www.searboardmarine.com or call 305-863-4444</a></h2>
                  
                    <></>
                   <button type="Submit" class="btn btn-primary" onClick={handleSubmit}>Go Back</button>
                </div>
                </form>
        
            
       
    )
}

export default Affiliate
