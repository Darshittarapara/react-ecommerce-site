import React from 'react';
import '../App.css';

import axios from 'axios';
import { useState, useEffect } from 'react';
let subtotalvalue = ''
function Cartlist() {
    const user_id = JSON.parse(localStorage.getItem('userdata'))
    const [cartitems, displayitems] = useState([])
    const [userquantity, getuserquantity] = useState(1)

    const [blockstyle, setdisplay] = useState('none')
    useEffect(() => {
        const formdata = new FormData()

        formdata.append("user_id", user_id.userid)
        axios({
            data: formdata,
            method: 'post',
            url: 'https://akashsir.in/myapi/ecom1/api/api-cart-list.php'
        }).then((res) => {

            if (res.data.flag === 1 && res.data.message !== "No Record Found.") {
                displayitems(res.data.cart)
                setdisplay('block')
                localStorage.setItem('grand_total', res.data.grand_total)
            }
            else {
                alert('please add some product');
                window.location.href = '/'
            }
        }).catch((error) => {
            console.log(error)
        })
    })

    function deletecartlist(e) {
        const cartid = parseInt(e.target.id)
        const formdata = new FormData()
        formdata.append('cart_id', cartid)
        axios({
            method: 'post',
            data: formdata,
            url: 'https://akashsir.in/myapi/ecom1/api/api-cart-remove-product.php'
        }).then((res) => {

            formdata.append("user_id", user_id.userid)
            axios({
                data: formdata,
                method: 'post',
                url: 'https://akashsir.in/myapi/ecom1/api/api-cart-list.php'
            }).then((res) => {
                if (res.data.flag === 1 && res.data.message !== "No Record Found.") {
                    displayitems(res.data.cart)

                    localStorage.setItem('grand_total', res.data.grand_total)
                }
                else {
                    alert('please add some product');
                    window.location.href = '/'
                }
            }).catch((error) => {
                console.log(error)
            })
        })
    }
    //
    function updatevalue(e) {
        const cartid = parseInt(e.target.id)
        const formdata = new FormData()
        formdata.append('cart_id', cartid)
        formdata.append('product_qty', userquantity)
        axios({
            method: 'post',
            data: formdata,
            url: 'https://akashsir.in/myapi/ecom1/api/api-cart-update.php'
        }).then((res) => {

            formdata.append("user_id", user_id.userid)
            axios({
                data: formdata,
                method: 'post',
                url: 'https://akashsir.in/myapi/ecom1/api/api-cart-list.php'
            }).then((res) => {

                displayitems(res.data.cart)
                //



            }).catch((error) => {
                console.log(error)
            })
        })
    }

    const Viewproduct = (e) => {

        const productid = e.target.id
        console.log(productid)
        const user = JSON.parse(localStorage.getItem('userdata'))
        const formdata = new FormData()
        formdata.append('user_id', user.userid)
        formdata.append('product_id', productid)
        axios({
            method: 'post',
            url: 'https://akashsir.in/myapi/ecom1/api/api-cart-view-product-single.php',
            data: formdata
        }).then((res) => {
            console.log(res.data)
        })
    }

    return (
        <div className='cart' style={{ display: blockstyle }}>

            <div className='cart_list'>
                <h2 style={{ marginLeft: '240px', marginBottom: '30px' }}>Your Cartlist</h2>
                {cartitems.map((ele, index) => {
                    subtotalvalue = ele.subtotal
                    return (
                        <div className='main_cart_block' key={`${index}`}>
                            <div className='product_img'>
                                <img src={ele.product_image} alt='' width={200} height={150} style={{ borderRadius: "20px" }} />
                                <br></br>


                            </div>

                            <div className='product_details'>
                                <h3>{ele.product_name}</h3>
                                <span className='price'>Price ₹{parseInt(ele.product_price) * parseInt(ele.product_qty)}</span>
                                <select onChange={(e) => { getuserquantity(e.target.value) }}>
                                    <option name='quantity'>1</option>
                                    <option name='quantity'>2</option>
                                    <option name='quantity'>3</option>
                                    <option name='quantity'>4</option>
                                    <option name='quantity'>5</option>
                                </select>
                                <button type='button' className='btn' id={ele.cart_id} onClick={updatevalue}>Update</button>
                                <button type='button' className='btn' id={ele.cart_id} onClick={deletecartlist}>Delete</button>
                                <button type='button' className='btn' id={ele.product_id} onClick={Viewproduct} >View Product</button>
                            </div>
                        </div>
                    )

                })}
                <div id='border'>
                    <div></div>
                </div>
                <div className='total'>
                    <span>Totalamount: ₹{subtotalvalue}</span>

                </div>
                <div className='placeorder'>
                    <button type='button' className='btn' onClick={() => {
                        window.location.href = '/Buy'
                    }}>place your order</button>
                </div>
            </div>

        </div>
    )
}

export default Cartlist;