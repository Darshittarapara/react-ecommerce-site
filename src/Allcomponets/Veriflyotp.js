import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios'
import '../App.css';
function Verifyotp() {
    const getverifynumber = localStorage.getItem('userverifynumber')
    const [userotp, getuserotp] = useState('')
    //
    //
    // 
    function Handlesubmit(e) {
        e.preventDefault()
        const formdata = new FormData()
        formdata.append('user_mobile', getverifynumber)
        formdata.append('mobile_otp', userotp)
        axios({
            method: 'post',
            url: 'https://akashsir.in/myapi/ecom1/api/api-verify-otp.php',
            data: formdata
        }).then((res) => {
            console.log(res.data)
            if (res.data.flag === 1) {
                const object = {
                    userid: res.data.user_array.user_id,
                    usermobile: res.data.user_array.user_mobile,
                    useraddress: res.data.user_array.user_address,
                    username: res.data.user_array.user_name,
                    useremail: res.data.user_array.user_email,
                    usergender: res.data.user_array.user_gender
                }
                localStorage.setItem('userdata', JSON.stringify(object))
                window.location.href = '/'
            }
            else {
                alert('please check your otp')
            }
        })
        getuserotp('')
    }
    function ResendOtp() {

        const form = new FormData()
        form.append('user_mobile', getverifynumber)
        axios({
            method: 'post',
            url: 'https://akashsir.in/myapi/ecom1/api/api-resend-otp.php',
            data: form
        }).then((res) => {
            getuserotp(res.data.mobile_otp)
        })
    }
    return (

        <div className='signup_form'>
            <h2>Please enter the OTP sent to
                {getverifynumber}</h2>
            <form onSubmit={Handlesubmit}>
                <div>
                    <input type='text' name='userotp' placeholder='Enter your otp' value={userotp} onChange={(e) => {
                        getuserotp(e.target.value)
                    }} />
                </div>

                <div>
                    <input type='submit' value='Verify' />
                </div>
                <div onClick={ResendOtp}>
                    <span style={{ textDecoration: 'underline', color: 'blue' }}>Resend Otp</span>
                </div>
            </form>
        </div>

    )
}

export default Verifyotp;