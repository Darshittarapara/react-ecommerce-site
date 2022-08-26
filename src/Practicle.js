//import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';

//what i learn in react
// 1.Component:function ,class
// 2.state:change the data at particular event
// 3.props:send data parent to child 
// 4.hook :revise 
// 5.api
// 6.router
const number = 121
function Func() {
    const [state, changevalue] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((res) => {
                return res.json()
                    .then((res) => {
                        changevalue(res)
                    })
            })
    })
    return (
        <div>hello world
            {state.map((ele, index) => {
                if (index < 101) {
                    return (
                        <div>
                            <h2>{ele.title}</h2>
                            <img src={ele.url} alt='' width={500} />
                        </div>
                    )

                }
            })}
        </div>
    )
}


export default Func;