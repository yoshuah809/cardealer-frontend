import {React, useState} from 'react'



function ContactMeForm({ history }) {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')



    const handleSubmit=(e)=>{
        e.preventDefault()

        if (fullname === '') {
            alert('Please enter a name')
        } else if (email === ''){
            alert('Please enter a Email')
        }else if (phone === ''){
                alert('Please enter a Phone Number')
        }else if (message === ''){
            alert('Please enter a Message')
        } else {
            alert(`Your message, have been received, we will contact you shortly`)
            history.push('/')

        }

      
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset >
               
                <div class="form-group row">
                    <div class="form-group">
                        <label class="col-form-label mt-4" for="inputDefault">Name</label>
                        <input type="text" 
                        class="form-control" 
                        placeholder="Please Enter your name" 
                        id="fullname" 
                        name='fullname'
                        value={fullname} 
                        onChange={(e) => setFullname(e.target.value)}
                        required
                    />
                    </div>
                </div>
                     
                <div class="form-group">
                    <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
                    <input type="email" class="form-control"
                     id="email" name="email"
                     aria-describedby="emailHelp"
                     laceholder="Enter email"
                     value={email} 
                     onChange={(e) => setEmail(e.target.value)}
                    />
                <small id="emailHelp" class="form-text text-muted">Enter Email address We'll never share your email with anyone else.</small>
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1" class="form-label mt-4">Phone Number</label>
                    <input type="phone" 
                    class="form-control" 
                    id="phone" 
                    name="phone" 
                    placeholder="Enter Phone Number"
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div class="form-group">
                    <label for="exampleTextarea" class="form-label mt-4">Show interest in:</label>
                    <textarea 
                    class="form-control" 
                    id="message" rows="3" 
                    spellcheck="false" 
                    name='message' 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>
               <button type="submit" class="btn btn-primary">Submit</button>
            </fieldset>
            </form>
    )
}

export default ContactMeForm
