//import React from 'react';
import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom'
function Links(props) {




    return (
        <div className='link' >
            <ul><li ><Link to='/signup' >Sign up</Link></li>
                <li> <Link to='/Login'  >Login</Link></li>

            </ul>
        </div>
    )
}

export default Links;