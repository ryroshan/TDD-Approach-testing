import React from 'react';
import './style.css';
import LOGO from '../../assets/logo.png'
const Header = ()=>{

    return(
        <header data-test='headerComponent' >
            <div className='wrpa'>
                <div className='logo'>
                    <img data-test='logoIMG' src={LOGO} alt='logo'/>
                </div>
            </div>
        </header>
    )
};


export default Header;