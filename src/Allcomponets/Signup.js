import React from 'react';
import signupimg from '../signupimg.jpg'
import { useState } from 'react';
import axios from 'axios';
//https://akashsir.in/myapi/ecom1/api/api-signup.php
function Signup(props) {
    const [username, getusername] = useState('');
    const [useremail, getuseremail] = useState('');
    const [userpassword, getuserpassword] = useState('');
    const [usergender, getusergender] = useState('');
    const [useradress, getuseradress] = useState('')
    const [usernumber, getusernumber] = useState('')
    const [correctnumlength, getnumberlengh] = useState('')

    function SubmitHandle(e) {
        e.preventDefault()
        const formdata = new FormData()
        formdata.append('user_name', username)
        formdata.append('user_email', useremail)
        formdata.append('user_password', userpassword)
        formdata.append('user_gender', usergender)
        formdata.append('user_mobile', usernumber)
        formdata.append('user_address', useradress)
        axios({
            method: 'post',
            data: formdata,
            url: 'https://akashsir.in/myapi/ecom1/api/api-signup.php'
        }).then((res) => {
            console.log(res)
            if (res.data.flag === 1) {
                const object = {
                    userid: res.data.userdata.user_id,
                    usermobile: res.data.userdata.user_mobile,
                    useraddress: res.data.userdata.user_address,
                    username: res.data.userdata.user_name,
                    usergender: res.data.userdata.user_gender
         
                }
                localStorage.setItem('userdata', JSON.stringify(object))
                window.location.href = '/'
            }
        })
        getusername(''); getusernumber(''); getuseradress(''); getuseremail(''); getusergender(''); getuserpassword('')
    }
    return (
        <>
            <div className='signup'>
                <div className='signup_child'>
                    <div className='signup_grand_child'>
                        <img src={signupimg} alt='' width={300} height={500} />

                        <div className='signup_form'>
                            <h2>Sign up</h2>
                            <form onSubmit={SubmitHandle}>
                                <div>
                                    <input type='text' name='username' placeholder='Name' value={username} onChange={(e) => {
                                        getusername(e.target.value)
                                    }} />
                                </div>
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
                                    <input type='radio' name='usergender' id='Male' value={usergender} onChange={(e) => {
                                        getusergender(e.target.id)
                                    }} />Male
                                    <input type='radio' name='usergender' id='Female' value={usergender} onChange={(e) => {
                                        getusergender(e.target.id)
                                    }} />Female
                                </div>
                                <div>
                                    <input type='text' name='useradress' placeholder='adress' value={useradress} onChange={(e) => {
                                        getuseradress(e.target.value)
                                    }} />
                                </div>
                                <div>
                                    <input type='number' name='usernumber' value={usernumber} placeholder='mobilenumber' onChange={(e) => {
                                        if (e.target.value.length > 10) {
                                            getnumberlengh('please enter valid number')
                                        }
                                        else {
                                            getnumberlengh('')
                                            getusernumber(e.target.value)
                                        }
                                    }} />
                                    <br></br>
                                    {correctnumlength}
                                </div>
                                <div>
                                    <input type='submit' value='Signup' />
                                </div>

                            </form>
                            <div className='header-class'>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;