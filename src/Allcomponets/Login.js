import React from 'react';
//https://akashsir.in/myapi/ecom1/api/api-login-with-otp.php
import { useState } from 'react';
import signupimg from '../signupimg.jpg'
import axios from 'axios';
import { Link } from 'react-router-dom';
function Login() {
    const [useremail, getuseremail] = useState('');
    const [userpassword, getuserpassword] = useState('');
    function SubmitHandle(e) {
        e.preventDefault()
        // `${}`
        // 
        const formdata = new FormData()
        formdata.append('user_email', useremail)
        formdata.append('user_password', userpassword)
        axios({
            method: 'post',
            data: formdata,
            url: 'https://akashsir.in/myapi/ecom1/api/api-login.php'
        }).then((res) => {
            console.log(res)
            if (res.data.flag === 1) {
                const object = {
                    userid: res.data.userdata.user_id,
                    usermobile: res.data.userdata.user_mobile,
                    useraddress: res.data.userdata.user_address,
                    username: res.data.userdata.user_name,
                    useremail: res.data.userdata.user_email,
                    usergender: res.data.userdata.user_gender
                }
                localStorage.setItem('userdata', JSON.stringify(object))
                window.location.href = '/react-ecommerce-site'

            }
            else {
                alert(res.data.message)
            }
        })
        getuseremail(''); getuserpassword('')
    }

    return (
        <>
            <div className='signup'>
                <div className='signup_child'>
                    <div className='signup_grand_child'>
                        <img src={signupimg} alt='' width={300} height={500} />
                        <div className='signup_form'>
                            <h2>Log in</h2>
                            <form onSubmit={SubmitHandle}>
                                <div>
                                    <input type='email' name='useremail' placeholder='useremail' value={useremail} onChange={(e) => {
                                        getuseremail(e.target.value)
                                    }} />
                                </div>
                                <div>
                                    <input type='password' name='userpassword' placeholder='userepassword' value={userpassword} onChange={(e) => {
                                        getuserpassword(e.target.value)
                                    }} />
                                </div>
                                <div>
                                    <input type='submit' value='LogIn' />
                                </div>
                                <div>
                                    <span>OR</span>
                                </div>
                                <div>
                                    <button type='button' value='Login with OTP' className='btn'>
                                        <Link to='/otp' style={{ textDecoration: 'none', color: "black" }} >Login with OTP</Link>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;