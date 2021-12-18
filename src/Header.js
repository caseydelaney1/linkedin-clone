import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
    return (
        <div className='header'>
            
            <div className='header__left'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt=""/>
                <div className="header__search">
                    <SearchIcon />
                    <input type='text' />
                </div>
            </div>

            <div className='header__right'>
                <HeaderOptions Icon={HomeIcon} title='Home'/>
                <HeaderOptions Icon={SupervisorAccountIcon} title='My Network'/>
                <HeaderOptions Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOptions Icon={ChatIcon} title='Messaging'/>
                <HeaderOptions Icon={NotificationsIcon} title='Notifications'/>
                <HeaderOptions avatar='https://www.seekpng.com/ima/u2q8u2w7e6u2o0e6/' title='Casey Delaney'/>
            </div>
        </div>
    )
}

export default Header
