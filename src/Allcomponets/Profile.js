import React from 'react';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import '../App.css'
function Profile() {
    const [profile, getuserprofile] = useState([])
    useEffect(() => {
        const userdetails = JSON.parse(localStorage.getItem('userdata'))
        getuserprofile(userdetails)
    }, [])
    return (

        <div className='profile_control'>
            <div className='profile_block'>
                {console.log(profile)}
                <table>
                    <tbody>
                        {console.log(profile)}
                        <tr>
                            <td>Name :</td>
                            <td>{profile.username}</td>
                        </tr>
                        <tr></tr>
                        <tr>
                            <td>email :</td>
                            <td>{profile.useremail}</td>
                        </tr>
                        <tr></tr>
                        <tr>
                            <td>gender:</td>
                            <td>{profile.usergender}</td>
                        </tr>
                        <tr></tr>
                        <tr>
                            <td>mobile :</td>
                            <td>{profile.usermobile}</td>
                        </tr>
                        <tr></tr>
                        <tr>
                            <td>Address:</td>
                            <td>{profile.useraddress}</td>
                        </tr>

                        <tr>
                            <td>
                                <button type='button' className='btn'>
                                    <Link to='/changepassword' style={{ textDecoration: 'none', color: "white" }} >Changepassword</Link>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Profile;