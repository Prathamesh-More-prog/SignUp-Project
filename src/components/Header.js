import React from 'react'
import Avatar from '@mui/material/Avatar';

import './header.css'
function Header(){
    return(
        <>
        <header>
            <nav>
                <h1 style={{color:"black" , maxLines:1}}>HP Cloud</h1>
                <div className='avatar'>
                <Avatar style={{background:"yellow"}}>H</Avatar>

                </div>
            </nav>
        </header>
            
        </>
    )
}

export default Header