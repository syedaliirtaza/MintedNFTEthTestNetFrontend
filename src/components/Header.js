import React from 'react'
import "./Header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png"
import SearchIcon from '@mui/icons-material/Search';
import LightModeIcon from '@mui/icons-material/LightMode';

function Header() {
    
    return (
        <div className='header'>
            <div className='logoContainer'>
                <img src={punkLogo} className='punkLogo' alt="" />
            </div>
            <div className='searchBarContainer'>
                <div className='searchIcon'>
                <SearchIcon />
                </div>
                <input className="inputField" type="text" placeholder="Collection, item or user" />
            </div>
            <div className='headerItems'>
                 <p>Drops</p>
                 <p>Marketplace</p>
                 <p>Create</p>
            </div>
            <div className='lightMode'>
                <LightModeIcon />
            </div>
            <div className='buttonGetin'>GET IN
            </div>
        </div>
    )
}

export default Header;
