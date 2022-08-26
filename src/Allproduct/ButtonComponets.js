import React from 'react'

import axios from 'axios'
function ButtonComponets(props) {
    const product_id = props.id
    const user_id = JSON.parse(localStorage.getItem('userdata'))

    return (
        <>

            <button type='button' className='btn' onClick={() => {
                if (user_id !== null) {
                    const formdata = new FormData()
                    formdata.append('user_id', user_id.userid);
                    formdata.append('product_id', product_id)
                    formdata.append('product_qty', props.productqty)

                    axios({
                        method: 'post',
                        url: 'https://akashsir.in/myapi/ecom1/api/api-cart-insert.php',
                        data: formdata
                    }).then((res) => {
                        console.log(res.data);
                        window.location.href = '/cart'
                    })
                }
                else {
                    window.location.href = '/Login'
                }

            }}>Add to card</button>
        </>
    )
}

export default ButtonComponets;