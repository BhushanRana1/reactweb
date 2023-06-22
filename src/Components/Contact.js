import React, { useState } from 'react'

function Contact() {
    const [data, setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        msg:""
    })
    const formSubmit = (e) =>{
        // setData("");
        e.preventDefault();
        alert(`My name is ${data.fullname}. My mobile number is ${data.phone}. My email id is ${data.email}. Here is what I want to say ${data.msg}`)
        
    }

    const inputEvent = (e) =>{
        const {name, value} = e.target
        setData((pre)=>{
            return{
                ...pre, 
                [name]:value,
            }
        })
    }
    return (
        <div className='mb-5'>
            <div className='my-5'>
                <h1 className='text-center'>Contact Us</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1"
                                    class="form-label">Full Name</label>
                                <input type="text"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={inputEvent}
                                    placeholder="Enter Your Name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1"
                                    class="form-label">Phone</label>
                                <input type="number"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="phone"
                                    value={data.phone}
                                    onChange={inputEvent}
                                    placeholder="Mobile Number" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1"
                                    class="form-label">Email address</label>
                                <input type="email"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="email"
                                    value={data.email}
                                    onChange={inputEvent}
                                    placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1"
                                    class="form-label">Message</label>
                                <textarea class="form-control"
                                    name='msg'
                                    value={data.msg}
                                    onChange={inputEvent}
                                    id="exampleFormControlTextarea1"
                                    rows="3"></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary"
                                type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;