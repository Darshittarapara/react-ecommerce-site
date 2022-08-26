import React from "react";
import axios from "axios";

class AddSignup extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            item: [],
            username: '',
            useremail: '',
            password: '',
            gender: '',
            mobile: '',
            address: ''


        }
    }


    handleChangeUser = event => {
        this.setState({ username: event.target.value });

    }

    handleChangeEmail = event => {

        this.setState({ useremail: event.target.value })
    }

    handleChangePasword = event => {
        this.setState({ password: event.target.value })
    }

    handleGender = event => {
        this.setState({ gender: event.target.value })
    }

    handlemobile = event => {
        this.setState({ mobile: event.target.value })

    }

    handleaddress = event => {
        this.setState({ address: event.target.value })
    }


    handleSubmit = event => {
        event.preventDefault();
        const formdata = new FormData();
        formdata.append('user_name', this.state.username)
        formdata.append('user_email', this.state.useremail)
        formdata.append('user_password', this.state.password)
        formdata.append('user_gender', this.state.gender)
        formdata.append('user_mobile', this.state.mobile)
        formdata.append('user_address', this.state.address)
        axios({
            method: 'post',
            url: 'https://akashsir.in/myapi/ecom1/api/api-signup.php',
            data: formdata

        }).then(response => {
            console.log(response);
            console.log(response.data);
            this.setState({ item: this.state.item.concat(response.data.userdata) });
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Username</label>
                    <input type='text' name='title' placeholder="Enter username" onChange={this.handleChangeUser.bind(this)} />
                    <label>Password</label>
                    <input type='text' name='detail' placeholder="Enter password" onChange={this.handleChangePasword.bind(this)} />
                    <label>user mail</label>
                    <input type='text' name='mail' placeholder="Entermail" onChange={this.handleChangeEmail.bind(this)} />
                    <label>user Gender</label>
                    <input type='text' name='gender' placeholder="enter Gender" onChange={this.handleGender.bind(this)} />
                    <label>Mobile</label>
                    <input type='text' name='mobile' placeholder="enter mobile" onChange={this.handlemobile.bind(this)} />
                    <label>Address</label>
                    <input type='text' name='address' placeholder='enter address' onChange={this.handleaddress.bind(this)} />
                    <input type='submit' value='add' />
                </form>
                <ul>
                    {this.state.item.map(items => (

                        <li key={`${items.user_id}`} >
                            User ID :{items.user_id} | User Name : {items.user_name} | User Mobile : {items.user_mobile}  |
                            User Email : {items.user_email}  | Gender: {items.user_gender} | Address:{items.user_address} |
                            Photo:{items.user_photo}
                        </li>
                    ))}
                </ul>
            </div >

        )
    }
}



export default AddSignup;