import React from 'react';
import { useState } from 'react';
import signupimg from '../signupimg.jpg'


import axios from 'axios';
//
//  
//
//
//
function Changepassword() {
    const [confirmpassword, getconfirmpass] = useState('')
    const [oldpassword, getoldpass] = useState('')
    const [newpassword, getnewpassword] = useState('');
    const [notmatchpassword, checkcofiandnewpass] = useState('')

    function SubmitHandle(e) {
        e.preventDefault()
        if (newpassword === confirmpassword) {
            checkcofiandnewpass('')
            const user_id = JSON.parse(localStorage.getItem("userdata"))
            //
            const formdata = new FormData()
            formdata.append('user_id', user_id.userid)
            formdata.append('opass', oldpassword)
            formdata.append('npass', newpassword)
            formdata.append('cpass', confirmpassword)
            axios({
                method: 'post',
                url: 'https://akashsir.in/myapi/ecom1/api/api-change-password.php',
                data: formdata
            })
                .then((res) => {
                    console.log(res.data)
                    if (res.data.flag === 1) {
                        alert('your password is successfully change')
                        window.location.href = '/'
                    }
                    else {
                        alert('please check your old password')
                    }
                })

        }
        else {
            checkcofiandnewpass('please check confirm password')
        }
        getoldpass(''); getnewpassword(''); getconfirmpass('')
    }
    return (
        <div className='signup'>
            <div className='signup_child'>
                <div className='signup_grand_child'>
                    <img src={signupimg} alt='' width={300} height={500} />
                    <div className='signup_form'>
                        <h2>Change password</h2>
                        <form onSubmit={SubmitHandle}>
                            <div>
                                <input type='password' name='oldpassword' placeholder='oldpassword' value={oldpassword} onChange={(e) => {
                                    getoldpass(e.target.value)
                                }} />
                            </div>
                            <div>
                                <input type='password' name='newpassword' placeholder='newpassword' value={newpassword} onChange={(e) => {
                                    getnewpassword(e.target.value)
                                }} />
                            </div>
                            <div>
                                <input type='password' name='confirmpassword' placeholder='confirmpassword' value={confirmpassword} onChange={(e) => {
                                    getconfirmpass(e.target.value)
                                }} />
                                <br></br>
                                {notmatchpassword}
                            </div>
                            <div>
                                <input type='submit' value='Change password' />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Changepassword;