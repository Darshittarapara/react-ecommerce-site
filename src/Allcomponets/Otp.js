//import React from 'react';
import React, { useState } from 'react';
import signupimg from '../signupimg.jpg'
import axios from 'axios';
import '../App.css'

import Verifyotp from './Veriflyotp';
function Otppage() {
    const [usernumber, getusernumber] = useState('')
    const [formdisplay, changeformdisplaypro] = useState('block')
    const [changecomponets, setverifycomponets] = useState('')
    function Handlesubmit(event) {
        const formdata = new FormData()
        // 
        localStorage.setItem('userverifynumber', usernumber)
        formdata.append('user_mobile', usernumber)
        axios({
            method: 'post',
            url: 'https://akashsir.in/myapi/ecom1/api/api-login-with-otp.php',
            data: formdata
        }).then((res) => {
            alert(`${res.data.mobile_otp} is the verification code`);
            changeformdisplaypro('none')
            setverifycomponets(<Verifyotp />)

        })

    }
    return (
        <div className='signup'>
            <div className='signup_child'>
                <div className='signup_grand_child'>
                    <img src={signupimg} alt='' width={300} height={500} />
                    <div className='signup_form'>
                        <h2>Log in</h2>
                        <form style={{ display: formdisplay }}>
                            <div>
                                <input type='number' name='userenumber' placeholder='mobilenumber' onChange={(e) => {
                                    getusernumber(e.target.value)
                                }} />
                            </div>

                            <div>
                                <button type='button' onClick={Handlesubmit} className='btn'>
                                    Send otp
                                </button>
                            </div>
                            

                        </form>

                        {changecomponets}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Otppage;