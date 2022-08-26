import axios from 'axios';
import React, { useState, useEffect } from 'react';
import OrderDetails from './OrderDetails';
import '../App.css'
let orderid = ''
function Displayorder() {
    const [orderdetails, getorderdetails] = useState([])
    const [orderlistdisplay, setdisplaypropeties] = useState('block')
    const [load, chageboolenvalue] = useState(false)
    const [renderordercomponets, setorderdetailscomponets] = useState('')


    useEffect(() => {
        const userdetails = JSON.parse(localStorage.getItem('userdata'));
        const formdata = new FormData()
        formdata.append("user_id", userdetails.userid);
        axios({
            url: 'https://akashsir.in/myapi/ecom1/api/api-order-listing.php',
            method: 'post',
            data: formdata
        })
            .then((res) => {
                chageboolenvalue(true)
                localStorage.setItem('orderid', res.data.order_list[0].order_id)
                //product_id
                localStorage.setItem('producid', res.data.order_list[0].order_details[0].product_id)
                getorderdetails(res.data.order_list)
            })
    }, [])

    function DisplayDetails(e) {
        let vieworeder = ''
        vieworeder = (orderdetails[orderdetails.length - 1].order_details);
        //for date and shiping details
        const filterorder_list = orderdetails.filter((ele) => {
            if (ele.order_id === e.target.id) {
                orderid = ele.order_id
                return ele
            }
        })
        //this is for product details 
        const filterorder_details = vieworeder.filter((ele) => {
            console.log(orderid)
            console.log(ele)
            return ele.order_id === orderid
        })


        setdisplaypropeties('none')
        setorderdetailscomponets(<OrderDetails productarray={filterorder_details} orderarray={filterorder_list} />)

    }
    //Remove order



    if (!load) {
        return (
            <div>
                <h4>please wait</h4>
            </div>)
    }
    return (
        <>
            <div className='order' style={{ display: orderlistdisplay }}>
                <h2>order details</h2>
                {orderdetails.map((ele, index) => {
                    return (
                        <div className='parent_order' key={`${index}`}>
                            <img src={ele.order_details[index].product_image} width={150} height={100} alt='' />
                            <div className='order_name'>
                                <h4>{ele.order_details[index].product_name}</h4>
                                <span>
                                    order-date :{ele.order_date}
                                </span>
                                <br></br>
                                <span style={{ textDecoration: 'underline', color: 'blue' }} id={ele.order_id} onClick={DisplayDetails}>View order details</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                {renderordercomponets}
            </div>

        </>
    )

}
export default Displayorder;