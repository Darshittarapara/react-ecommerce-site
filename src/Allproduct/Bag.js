import React, { useState } from 'react';
import ButtonComponets from './ButtonComponets';
function Bag(props) {
    const [userquantity, getuserquantity] = useState(1)
    return (
        <>
            <div className='showproduct'>
                {props.viewproduct.map(ele => {
                    let html;
                    if (ele.product_name.includes('Bag') && ele.product_id !== '82' && ele.product_id !== '80') {
                        html =
                            <div className='product_list' key={`${ele.product_id}`}>
                                <img src={ele.product_image} alt='' width={260} height={200} />
                                <h3>{ele.product_name}</h3>
                                <span className='price'>Price ₹{ele.product_price} </span>
                                <select onChange={(e) => { getuserquantity(e.target.value) }}>
                                    <option name='quantity'>1</option>
                                    <option name='quantity'>2</option>
                                    <option name='quantity'>3</option>
                                    <option name='quantity'>4</option>
                                    <option name='quantity'>5</option>
                                </select>
                                <div className='button'>
                                    <ButtonComponets cartproduct={props.viewproduct} id={ele.product_id} productqty={userquantity} />
                                </div>
                            </div>


                    }
                    return html
                })}
            </div>
        </>
    )
}

export default Bag;