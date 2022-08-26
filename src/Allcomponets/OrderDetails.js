import React from 'react';
import '../App.css'

function OrderDetails(props) {
    const order_details = props.productarray;
    const order_list = props.orderarray
    console.log(order_details)
    console.log(order_list)

    return (
        <>
            <div className='order_parent_block'>

                <div className='common_order_block'>
                    <h2>View OrderDetails</h2>
                    <span>order date : {order_list[0].order_date}</span>
                    <br></br>
                    <span>order Total :  ₹ {order_details[0].total_amount}</span>
                </div>

                <div className='common_order_block'>
                    <h2>Shipment details</h2>
                    <img src={order_details[0].product_image} width={150} height={100} alt='' />

                    <div className='order_name'>
                        <span>{order_details[0].product_name}</span>
                        <br></br>
                        <span>Qty : {order_details[0].product_qty}</span>
                        <br></br>
                        price : ₹ {order_details[0].product_unit_price}

                    </div>

                </div>
                <br></br>
                <div className='common_order_block'>
                    <h2>Payment information and shipping address</h2>
                    <div className='payment'>
                        <span></span>
                    </div>

                    <span>payment-method :{order_list[0].payment_method}</span>
                    <br></br>
                    <span>Address : {order_list[0].shipping_address}</span>

                </div>
                <div>
                    <button type='button' className='btn' onClick={() => {
                        window.location.reload()
                    }}>Back</button>
                    <button type='button' className='btn'>Buy Now</button>
                </div>
            </div>
        </>
    )
}

export default OrderDetails;