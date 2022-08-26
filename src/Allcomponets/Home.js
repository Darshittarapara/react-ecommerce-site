import React from 'react';
import Heels from '../Allproduct/Heels';
import '../App.css';
import Bag from '../Allproduct/Bag';
import Shoes from '../Allproduct/Shoes';
import Watch from '../Allproduct/Watch';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Jeans from '../Allproduct/Jeans';
import Shirt from '../Allproduct/Shirt';
function Home() {
    const [viewproduct, showproductlist] = useState([])
    const [currentComponets, changecomponets] = useState('');
    const [load, chageboolenvalue] = useState(false)
    useEffect(() => {
        axios.get('https://akashsir.in/myapi/ecom1/api/api-view-product.php')
            .then((res) => {
                showproductlist(res.data.product)
                changecomponets(<Shirt viewproduct={res.data.product} />)
                chageboolenvalue(true)
            })
    }, [])
    if (!load) {
        return (
            <div>
                <h4>please wait</h4>
            </div>)
    }
    return (
        <div className='home'>
            <div className='homebackground'>
                <div className="detail-box">
                    <h1>
                        <span>
                            Sale 20% Off
                        </span>
                        <br />
                        On Everything
                    </h1>
                    <p>
                        Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                    </p>
                    <div className="btn-box">
                        <a href="/" className="btn1">
                            Shop Now
                        </a>
                    </div>
                </div>
            </div>
            <div className='all_product'>
                <h1 style={{ textAlign: 'center' }}>Most popular product</h1>
                {currentComponets}
                <div className='router_button'>
                    <button type='button' className='active' onClick={() => {
                        changecomponets(<Shirt viewproduct={viewproduct} />)
                    }}>
                        1
                    </button>
                    <button type='button' onClick={() => {
                        changecomponets(<Jeans viewproduct={viewproduct} />)
                    }}>
                        2
                    </button>
                    <button type='button' onClick={() => {
                        changecomponets(<Heels viewproduct={viewproduct} />)
                    }}>3</button>
                    <button type='button' onClick={() => {
                        changecomponets(<Bag viewproduct={viewproduct} />)
                    }}>4</button>
                    <button type='button' onClick={() => {
                        changecomponets(<Watch viewproduct={viewproduct} />)
                    }}>5</button>
                    <button type='button' onClick={() => {
                        changecomponets(<Shoes viewproduct={viewproduct} />)
                    }}>6</button>
                </div>
            </div>
        </div>
    )
}

export default Home;