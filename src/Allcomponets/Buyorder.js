//import React from 'react';
import axios from 'axios';
import React, { useState } from 'react';
import '../App.css'
//''
// user_id
// shipping_name
// shipping_mobile
// shipping_address
// payment_method
//api-add-order.php
function Buyorder() {
    const [paymentmethod, getpaymentmethod] = useState('')

    function Handlesubmit(e) {
        e.preventDefault()
        const userdetails = JSON.parse(localStorage.getItem('userdata'));
        const formdata = new FormData()
        formdata.append("user_id", userdetails.userid);
        formdata.append("shipping_name", userdetails.username);
        formdata.append("shipping_address", userdetails.useraddress)
        formdata.append("shipping_mobile", userdetails.usermobile)
        formdata.append("payment_method", paymentmethod);
        axios({
            method: 'post',
            url: 'https://akashsir.in/myapi/ecom1/api/api-add-order.php',
            data: formdata
        }).then((res) => {
            if (res.data.flag === 1) {
                window.location.href = '/Displayorder'
            }
        })
    }
    return (
        <>
            <div className='payment_method_parent'>
                <div className='payment_child'>
                    <h3>Please Selete Payment method</h3>
                    <form onSubmit={Handlesubmit}>
                        <div>
                            <input type='radio' id='Debitcard' name='paymentmethod' onChange={(e) => {
                                getpaymentmethod(e.target.id)
                            }} /> Debit card
                        </div>
                        <div>
                            <input type='radio' id='UPI' name='paymentmethod' onChange={(e) => {
                                getpaymentmethod(e.target.id)
                            }} /> UPI
                        </div>
                        <div>
                            <input type='radio' id='cashonDelivery' name='paymentmethod' onChange={(e) => {
                                getpaymentmethod(e.target.id)
                            }} /> cash on Delivery
                        </div>
                        <div>
                            <input type='radio' id='EMI' name='paymentmethod' onChange={(e) => {
                                getpaymentmethod(e.target.id)
                            }} /> EMI
                        </div>
                        <div>
                            <input type='submit' value='Continue' />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Buyorder;